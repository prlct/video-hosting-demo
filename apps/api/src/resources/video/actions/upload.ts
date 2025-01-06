// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import multer from '@koa/multer';
import * as tus from 'tus-js-client';

import { userService } from 'resources/user';
import { videoService } from 'resources/video';

import config from 'config';

import { AppKoaContext, AppRouter, Next } from 'types';

const upload = multer();

// const schema = z.object({
//  firstName: z.string().min(1, 'Please enter First name').max(100),
//  lastName: z.string().min(1, 'Please enter Last name').max(100),
//  email: z.string().toLowerCase().regex(EMAIL_REGEX, 'Email format is incorrect.'),
// });

// type ValidatedData = z.infer<typeof schema>;
type Request = {
  params: {
    id: string;
  };
};

async function validator(ctx: AppKoaContext<Request>, next: Next) {
  const { user } = ctx.state;
  const isUserExists = userService.exists({ _id: user._id });

  ctx.assertClientError(isUserExists, { global: 'User not found.' });

  await next();
}

async function handler(ctx: AppKoaContext<Request>) {
  const { body, file } = ctx.request;

  const createdVideo = await videoService.insertOne({
    title: body.title,
    description: body.description,
    status: 'processing',
  });

  const promise = new Promise((resolve, reject) => {
    const uploadTus = new tus.Upload(file.buffer, {
      endpoint: `https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/stream`,
      headers: {
        Authorization: `Bearer ${config.CLOUDFLARE_API_TOKEN}`,
      },
      chunkSize: 50 * 1024 * 1024, // For example: 50 MB chunks.
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        name: file.originalname,
        filetype: 'video/mp4',
      },
      uploadSize: file.size,
      onError(error) {
        console.error('Upload error:', error);
      },
      onAfterResponse: (req, res) => {
        const mediaIdHeader = res.getHeader('stream-media-id');
        if (mediaIdHeader) {
          videoService
            .updateOne({ _id: createdVideo._id }, () => ({
              streamId: mediaIdHeader,
            }))
            .then(() => resolve());
        } else {
          reject(new Error('No mediaId header found'));
        }
      },
    });

    uploadTus.start();
  });

  await promise;

  ctx.body = await videoService.findOne({ _id: createdVideo._id });
}

export default (router: AppRouter) => {
  router.post(
    '/',
    upload.single('file'),
    validator,
    // validateMiddleware(schema),
    handler,
  );
};
