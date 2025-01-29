import { tokenService } from 'resources/token';
import { userService } from 'resources/user';

import { users as User } from 'models/user';

import { AppKoaContext, Next } from 'types';

const tryToAttachUser = async (ctx: AppKoaContext, next: Next) => {
  const { accessToken } = ctx.state;

  console.log('accessToken', accessToken)

  const userData = await tokenService.findTokenByValue(accessToken);
  console.log('userData', userData)
  if (userData) {

    const user = await User.findOne({ where: { id: userData.userId } });

    console.log('user', user)

    if (user) {
      // await userService.updateLastRequest(userData.userId);

      //@ts-ignore
      ctx.state.user = user;
      ctx.state.isShadow = userData.isShadow || false;
    }
  }

  return next();
};

export default tryToAttachUser;
