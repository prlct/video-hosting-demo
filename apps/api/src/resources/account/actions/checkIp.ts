import { userService } from 'resources/user';

import config from 'config';

import { AppKoaContext, AppRouter } from 'types';

async function handler(ctx: AppKoaContext) {
 const { user } = ctx.state;
 const clientIp = ctx.ip;

 let ips: string[] = [];

 if (!user.ips || !Array.isArray(user.ips)) {
  ips = [];
 }

 if (Array.isArray(user.ips) && !user.ips.includes(clientIp)) {
  ips.push(clientIp);

  await userService.updateOne({ _id: user._id }, () => ({
   ips
  }));
 }


 const response = await fetch(`https://vpnapi.io/api/${clientIp}?key=${config.VPNAPI_KEY}`);
 const data = await response.json();

 ctx.body = data;
}

export default (router: AppRouter) => {
 router.get('/checkIp', handler);
};
