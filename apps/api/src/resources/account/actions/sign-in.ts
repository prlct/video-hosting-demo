import { users as User } from 'models/user';

import { userService } from 'resources/user';

import { rateLimitMiddleware, validateMiddleware } from 'middlewares';
import { authService } from 'services';
import { securityUtil } from 'utils';

import { signInSchema } from 'schemas';
import { AppKoaContext, AppRouter, Next, SignInParams } from 'types';

interface ValidatedData extends SignInParams {
  user: User;
}

async function validator(ctx: AppKoaContext<ValidatedData>, next: Next) {
  const { email, password } = ctx.validatedData;

  const user = await User.findOne({ where: { email }, raw: true });

  ctx.assertClientError(user && user.password, {
    credentials: 'The email or password you have entered is invalid',
  });

  const isPasswordMatch = await securityUtil.compareTextWithHash(password, user.password);

  ctx.assertClientError(isPasswordMatch, {
    credentials: 'The email or password you have entered is invalid',
  });

  ctx.assertClientError(user.confirmed, {
    email: 'Please verify your email to sign in',
  });

  ctx.validatedData.user = user;
  await next();
}

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const { user } = ctx.validatedData;
  console.log('useruseruseruseruseruser', user)
  // await Promise.all([userService.updateLastRequest(user._id), authService.setTokens(ctx, user.id)]);
  await Promise.all([authService.setTokens(ctx, user.id)]);

  ctx.body = userService.getPublic(user);
}

export default (router: AppRouter) => {
  router.post('/sign-in', rateLimitMiddleware(), validateMiddleware(signInSchema), validator, handler);
};
