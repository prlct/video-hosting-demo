import { routeUtil } from 'utils';

import cloudFlareWebhook from './actions/cloudflare';

const publicRoutes = routeUtil.getRoutes([cloudFlareWebhook]);

export default {
  publicRoutes,
};
