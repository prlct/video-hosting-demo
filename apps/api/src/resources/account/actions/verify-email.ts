import { z } from 'zod';

import { users as User } from 'models/user';
import { userService } from 'resources/user';

import { validateMiddleware } from 'middlewares';
import { authService, emailService } from 'services';

import config from 'config';

import { AppKoaContext, AppRouter, Next, Template } from 'types';

const schema = z.object({
  token: z.string().min(1, 'Token is required'),
});

interface ValidatedData extends z.infer<typeof schema> {
  user: User;
}

async function validator(ctx: AppKoaContext<ValidatedData>, next: Next) {
  const user = await User.findOne({ where: { confirmation_token: ctx.validatedData.token }, raw: true });

  if (!user) {
    ctx.redirect(`${config.WEB_URL}/sign-in`);

    return;
  }

  ctx.validatedData.user = user;
  await next();
}

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const { user } = ctx.validatedData;

  console.log('user', user)
  await User.update({
    confirmed: true,
    // confirmation_token: null,
  }, { where: { id: user.id } });

  // await Promise.all([userService.updateLastRequest(user._id), authService.setTokens(ctx, user.id)]);
  await Promise.all([authService.setTokens(ctx, user.id)]);

  // await emailService.sendTemplate<Template.SIGN_UP_WELCOME>({
  //   to: user.email,
  //   subject: 'Welcome to Ship Community!',
  //   template: Template.SIGN_UP_WELCOME,
  //   params: {
  //     firstName: user.firstName,
  //     href: `${config.WEB_URL}/sign-in`,
  //   },
  // });

  ctx.redirect(config.WEB_URL);
}

export default (router: AppRouter) => {
  router.get('/verify-email', validateMiddleware(schema), validator, handler);
};
