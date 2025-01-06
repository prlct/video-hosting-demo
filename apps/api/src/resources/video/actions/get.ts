// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { videoService } from 'resources/video';

import { AppKoaContext, AppRouter, Next } from 'types';

// const schema = z.object({
//   firstName: z.string().min(1, 'Please enter First name').max(100),
//   lastName: z.string().min(1, 'Please enter Last name').max(100),
//   email: z.string().toLowerCase().regex(EMAIL_REGEX, 'Email format is incorrect.'),
// });

// type ValidatedData = z.infer<typeof schema>;
type Request = {
  params: {
    id: string;
  };
};

async function validator(ctx: AppKoaContext<Request>, next: Next) {
  const isVideoExists = await videoService.exists({ _id: ctx.request.params.id });

  ctx.assertError(isVideoExists, 'Video not found');

  await next();
}

async function handler(ctx: AppKoaContext<Request>) {
  // const { firstName, lastName, email } = ctx.validatedData;

  const video = await videoService.findOne({ _id: ctx.request.params?.id });

  ctx.body = video;
}

export default (router: AppRouter) => {
  router.get('/:id', validator, handler);
};
