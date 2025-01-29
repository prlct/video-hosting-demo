/**
 * Module dependencies
 */

/* eslint-disable no-unused-vars */
// Public node modules.
const _ = require("lodash");
const AWS = require("aws-sdk");
const tus = require("tus-js-client");
const axios = require("axios");

function assertUrlProtocol(url) {
  // Regex to test protocol like "http://", "https://"
  return /^\w*:\/\//.test(url);
}

function removeLeadingSlash(str) {
  return str.replace(/^\//, "");
}

function getPathKey(file, pool = false) {
  const filePath = file.path ? `${file.path}/` : "";
  let path = filePath;
  if (!pool) {
    path =
      file.folderPath && file.folderPath !== "/"
        ? `${removeLeadingSlash(file.folderPath)}/${filePath}`
        : filePath;
  }

  const Key = `${path}${file.hash}${file.ext}`;
  return { path, Key };
}

function isVideo(file) {
  return file.mime && file.mime.startsWith("video/");
}

module.exports = {
  init(config) {
    const S3 = new AWS.S3({
      apiVersion: "2006-03-01",
      ...config,
    });

    if (!config.cloudflarePublicAccessUrl) {
      process.emitWarning(
        "\x1b[43mWARNING (strapi-provider-cloudflare-r2):\x1b[0m the provider config requires cloudflarePublicAccessUrl to upload files larger than 5MB. See more: https://github.com/trieb-work/strapi-provider-cloudflare-r2#provider-configuration"
      );
    }

    const aws_keys = Object.keys(process.env).filter((key) =>
      key.startsWith("AWS_")
    );
    if (aws_keys.length > 0) {
      console.warn(
        `\x1b[43mWARNING (strapi-provider-cloudflare-r2):\x1b[0m You are using strapi-provider-cloudflare-r2 and still have AWS_... env vars from provider-upload-aws-s3 set. This could conflict with Cloudflare R2 provider. Please remove ${aws_keys.join(
          ", "
        )} env variable(s) or rename+change them in plugin config. See more: https://github.com/trieb-work/strapi-provider-cloudflare-r2#aws-sdk-configuration-and-aws_-env-variables`
      );
    }

    const upload = async (file, customParams = {}) => {
      console.log('file', file)
      if (isVideo(file)) {
        return uploadToCloudflareStream(file);
      } else {
        return uploadToR2(file, customParams);
      }
    };

    const uploadToR2 = (file, customParams = {}) => {
      return new Promise((resolve, reject) => {
        console.log('file', file)
        // upload file on S3 bucket
        const { Key } = getPathKey(file, config.pool);
        S3.upload(
          {
            Key,
            Body: file.stream || Buffer.from(file.buffer, "binary"),
            ContentType: file.mime,
            ...customParams,
          },
          (err, data) => {
            if (err) {
              return reject(err);
            }

            const key =
              data.Location === "auto" &&
                data.Key.startsWith(`${config.params.Bucket}/`)
                ? data.Key.replace(`${config.params.Bucket}/`, "")
                : data.Key;

            if (config.cloudflarePublicAccessUrl) {
              file.url =
                config.cloudflarePublicAccessUrl.replace(/\/$/g, "") +
                "/" +
                key;
            } else if (data.Location !== "auto") {
              file.url = data.Location;
            } else {
              throw new Error(
                "Cloudflare S3 API returned no file location and cloudflarePublicAccessUrl is not set. strapi-provider-cloudflare-r2 requires cloudflarePublicAccessUrl to upload files larger than 5MB. https://github.com/trieb-work/strapi-provider-cloudflare-r2#provider-configuration"
              );
            }

            // check if https is included in file URL
            if (!assertUrlProtocol(file.url)) {
              // Default protocol to https protocol
              file.url = `https://${file.url}`;
            }

            resolve();
          }
        );
      });
    };

    const uploadToCloudflareStream = async (file) => {
      const accountId = config.cloudflareAccountId || config.CLOUDFLARE_ACCOUNT_ID;
      const apiToken = config.cloudflareApiToken || config.CLOUDFLARE_API_TOKEN;

      if (!accountId || !apiToken) {
        throw new Error(
          "Missing Cloudflare Stream credentials (accountId / apiToken) in config."
        );
      }

      return new Promise((resolve, reject) => {
        // The TUS client expects a buffer or stream. We have `file.buffer`, typically.
        const body = file.stream || file.buffer;
        if (!body) {
          return reject(new Error("No file buffer or stream found for TUS upload."));
        }

        const uploadTus = new tus.Upload(body, {
          endpoint: `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream`,
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
          chunkSize: 50 * 1024 * 1024, // 50 MB chunk
          retryDelays: [0, 3000, 5000, 10000, 20000],
          metadata: {
            name: file.name || "video",
            filetype: file.mime || "video/mp4",
          },
          uploadSize: file.sizeInBytes,
          onError(error) {
            reject(error);
          },
          onAfterResponse: (_req, res) => {
            const mediaId = res.getHeader("stream-media-id");
            if (mediaId) {
              file.provider_metadata = {
                streamId: mediaId
              }
            }
          },
          onSuccess() {
            console.log('file', file)
            if (!file.provider_metadata) {
              return reject(
                new Error("No 'stream-media-id' header returned from Cloudflare Stream")
              );
            }
            resolve();
          },
        });

        uploadTus.start();
      });
    };

    const deleteFile = (file, customParams = {}) => {
      const isVideoURL =
        typeof file.url === "string" &&
        file.mime.includes("video/");

      if (isVideoURL || isVideo(file)) {
        // Delete from CF Stream
        return new Promise(async (resolve, reject) => {
          try {
            const accountId =
              config.cloudflareAccountId || config.CLOUDFLARE_ACCOUNT_ID;
            const apiToken =
              config.cloudflareApiToken || config.CLOUDFLARE_API_TOKEN;

            if (!accountId || !apiToken) {
              return reject(
                new Error(
                  "Missing Cloudflare Stream credentials (accountId / apiToken) in config."
                )
              );
            }

            const mediaId = file.provider_metadata.streamId;

            const deleteEndpoint = `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${mediaId}`;
            await axios.delete(deleteEndpoint, {
              headers: { Authorization: `Bearer ${apiToken}` },
            });
            return resolve();
          } catch (err) {
            return reject(err);
          }
        });
      } else {
        // Delete from R2
        return new Promise((resolve, reject) => {
          const { Key } = getPathKey(file, config.upload);
          S3.deleteObject(
            {
              Key,
              ...customParams,
            },
            (err, data) => {
              if (err) {
                return reject(err);
              }
              resolve();
            }
          );
        });
      }
    };

    return {
      uploadStream(file, customParams = {}) {
        return upload(file, customParams);
      },
      upload(file, customParams = {}) {
        return upload(file, customParams);
      },
      delete: deleteFile,
    };
  },
};