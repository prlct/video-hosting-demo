// import { userService } from 'resources/user';
import { users as User } from 'models/user';
import { validateMiddleware } from 'middlewares';
import { emailService } from 'services';
import { securityUtil } from 'utils';

import config from 'config';

import { forgotPasswordSchema } from 'schemas';
import { AppKoaContext, AppRouter, ForgotPasswordParams, Next, Template } from 'types';

interface ValidatedData extends ForgotPasswordParams {
  user: User;
}

async function validator(ctx: AppKoaContext<ValidatedData>, next: Next) {
  const user = await User.findOne({ where: { email: ctx.validatedData.email } });

  if (!user) {
    ctx.status = 204;
    return;
  }

  ctx.validatedData.user = user;
  await next();
}

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const { user } = ctx.validatedData;

  let { reset_password_token } = user;

  if (!reset_password_token) {
    reset_password_token = await securityUtil.generateSecureToken();

    await User.update({
      reset_password_token,
    }, { where: { id: user.id } });
  }

  // const resetPasswordUrl = `${config.API_URL}/account/verify-reset-token?token=${reset_password_token}&email=${encodeURIComponent(user.email)}`;

  // await emailService.sendTemplate<Template.RESET_PASSWORD>({
  //   to: user.email,
  //   subject: 'Password Reset Request for Ship',
  //   template: Template.RESET_PASSWORD,
  //   params: {
  //     firstName: user.firstName,
  //     href: resetPasswordUrl,
  //   },
  // });

  ctx.status = 204;
}

export default (router: AppRouter) => {
  router.post('/forgot-password', validateMiddleware(forgotPasswordSchema), validator, handler);
};
