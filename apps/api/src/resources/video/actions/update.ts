// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { z } from 'zod';

import { videoService } from 'resources/video';

import { validateMiddleware } from 'middlewares';

import { EMAIL_REGEX } from 'app-constants';
import { AppKoaContext, AppRouter, Next } from 'types';

const schema = z.object({
  firstName: z.string().min(1, 'Please enter First name').max(100),
  lastName: z.string().min(1, 'Please enter Last name').max(100),
  email: z.string().toLowerCase().regex(EMAIL_REGEX, 'Email format is incorrect.'),
});

type ValidatedData = z.infer<typeof schema>;
type Request = {
  params: {
    id: string;
  };
};

async function validator(ctx: AppKoaContext<ValidatedData, Request>, next: Next) {
  const isVideoExists = await videoService.exists({ _id: ctx.request.params.id });

  ctx.assertError(isVideoExists, 'Video not found');

  await next();
}

async function handler(ctx: AppKoaContext<ValidatedData, Request>) {
  const { firstName, lastName, email } = ctx.validatedData;

  const updatedVideo = await videoService.updateOne({ _id: ctx.request.params?.id }, () => ({
    firstName,
    lastName,
    email,
  }));

  ctx.body = videoService.getPublic(updatedVideo);
}

export default (router: AppRouter) => {
  router.put('/:id', validator, validateMiddleware(schema), handler);
};
