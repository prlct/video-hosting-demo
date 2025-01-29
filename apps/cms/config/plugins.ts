export default ({ env }) => ({
 // enable a plugin that doesn't require any configuration
 i18n: true,

 // upload: {
 //  config: {
 //   provider: "strapi-provider-cloudflare-r2",
 //   providerOptions: {
 //    accessKeyId: env("CF_ACCESS_KEY_ID"),
 //    secretAccessKey: env("CF_ACCESS_SECRET"),
 //    /**
 //     * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
 //     */
 //    endpoint: env("CF_ENDPOINT"),
 //    params: {
 //     Bucket: env("CF_BUCKET"),
 //    },
 //    /**
 //     * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
 //     * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
 //     * This option is required to upload files larger than 5MB, and is highly recommended to be set.
 //     * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
 //     */
 //    cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL"),
 //    /**
 //     * Sets if all assets should be uploaded in the root dir regardless the strapi folder.
 //     * It is useful because strapi sets folder names with numbers, not by user's input folder name
 //     * By default it is false
 //     */
 //    pool: true,
 //   },
 //   actionOptions: {
 //    upload: {},
 //    uploadStream: {},
 //    delete: {},
 //   },
 //  },
 // },
 // upload: {
 //  config: {
 //   provider: 'strapi-provider-upload-cloudflare', // the folder name
 //   providerOptions: {
 //    accessKeyId: env('R2_ACCESS_KEY_ID'),
 //    secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
 //    endpoint: env('R2_ENDPOINT'),
 //    bucket: env('R2_BUCKET'),
 //    cloudflarePublicAccessUrl: env('R2_PUBLIC_URL'),
 //    cfAccountId: env('CLOUDFLARE_ACCOUNT_ID'),
 //    cfApiToken: env('CLOUDFLARE_API_TOKEN'),
 //   },
 //  },
 // },
 upload: {
  config: {
   provider: 'strapi-provider-upload-r2', // the folder name
   providerOptions: {
    accessKeyId: env("R2_ACCESS_KEY_ID"),
    secretAccessKey: env("R2_ACCESS_SECRET"),
    /**
     * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
     */
    endpoint: env("R2_ENDPOINT"),
    params: {
     Bucket: env("R2_BUCKET"),
    },
    /**
     * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
     * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
     * This option is required to upload files larger than 5MB, and is highly recommended to be set.
     * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
     */
    cloudflarePublicAccessUrl: env("R2_PUBLIC_ACCESS_URL"),
    cloudflareAccountId: env("CLOUDFLARE_ACCOUNT_ID"),
    cloudflareApiToken: env("CLOUDFLARE_API_TOKEN"),
    /**
     * Sets if all assets should be uploaded in the root dir regardless the strapi folder.
     * It is useful because strapi sets folder names with numbers, not by user's input folder name
     * By default it is false
     */
    pool: false,
   },
  },
 },
 email: {
  config: {
   provider: 'strapi-provider-email-resend',
   providerOptions: {
    apiKey: env('RESEND_API_KEY'), // Required
   },
   settings: {
    defaultFrom: 'onboarding@resend.dev',
   },
  }
 },
 // // disable a plugin
 // 'my-other-plugin': {
 //   enabled: false, // plugin installed but disabled
 // },
});