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
 // https://vpnapi.io/api/${clientIp}?key=${config.VPNAPI_KEY}

 const response = await fetch(`https://vpnapi.io/api/2001:4860:7:224::f4?key=8bf75a98af314beb8cb51381fba17f10`);
 const data = await response.json();

 console.log('data', data)

 ctx.body = data;
}

export default (router: AppRouter) => {
 router.get('/checkIp', handler);
};
