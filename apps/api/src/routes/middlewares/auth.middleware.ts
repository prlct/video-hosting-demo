import { AppKoaContext, Next } from 'types';

const auth = (ctx: AppKoaContext, next: Next) => {
  console.log('ctx.state.user', ctx.state.user)
  if (ctx.state.user) {
    return next();
  }

  ctx.status = 401;

  return null;
};

export default auth;
