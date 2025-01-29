import { users as User } from 'models/user';
import { validateMiddleware } from 'middlewares';
import { analyticsService, emailService } from 'services';
import { securityUtil } from 'utils';

import config from 'config';

import { signUpSchema } from 'schemas';
import { AppKoaContext, AppRouter, Next, SignUpParams, Template } from 'types';

async function validator(ctx: AppKoaContext<SignUpParams>, next: Next) {
  const { email } = ctx.validatedData;

  const isUserExists = await User.findOne({ where: { email } });

  ctx.assertClientError(!isUserExists, {
    email: 'User with this email is already registered',
  });

  await next();
}

async function handler(ctx: AppKoaContext<SignUpParams>) {
  const { firstName, lastName, email, password } = ctx.validatedData;

  const [hash, confirmation_token] = await Promise.all([securityUtil.getHash(password), securityUtil.generateSecureToken()]);

  const user = await User.create({
    email,
    first_name: firstName,
    last_name: lastName,
    password: hash.toString(),
    confirmed: false,
    confirmation_token,
  });

  // analyticsService.track('New user created', {
  //   firstName,
  //   lastName,
  // });

  // await emailService.sendTemplate<Template.VERIFY_EMAIL>({
  //   to: user.email,
  //   subject: 'Please Confirm Your Email Address for Ship',
  //   template: Template.VERIFY_EMAIL,
  //   params: {
  //     firstName: user.first_name,
  //     href: `${config.API_URL}/account/verify-email?token=${confirmation_token}`,
  //   },
  // });

  if (config.IS_DEV) {
    ctx.body = { signupToken: confirmation_token };
    return;
  }

  ctx.status = 204;
}

export default (router: AppRouter) => {
  router.post('/sign-up', validateMiddleware(signUpSchema), validator, handler);
};
