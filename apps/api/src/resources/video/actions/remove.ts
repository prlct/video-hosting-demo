// import { videoService } from 'resources/video';

// import { AppKoaContext, AppRouter, Next } from 'types';

// type ValidatedData = never;
// type Request = {
//   params: {
//     id: string;
//   };
// };

// async function validator(ctx: AppKoaContext<ValidatedData, Request>, next: Next) {
//   const isVideoExists = await videoService.exists({ _id: ctx.request.params.id });

//   ctx.assertError(isVideoExists, 'Video not found');

//   await next();
// }

// async function handler(ctx: AppKoaContext<ValidatedData, Request>) {
//   await videoService.deleteSoft({ _id: ctx.request.params.id });

//   ctx.status = 204;
// }

// export default (router: AppRouter) => {
//   router.delete('/:id', validator, handler);
// };
