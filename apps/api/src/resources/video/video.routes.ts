import { routeUtil } from 'utils';

import get from './actions/get';
import list from './actions/list';
import remove from './actions/remove';
import update from './actions/update';
import upload from './actions/upload';

const publicRoutes = routeUtil.getRoutes([]);

const privateRoutes = routeUtil.getRoutes([list, get, update, remove, upload]);

const adminRoutes = routeUtil.getRoutes([list, get, update, remove, upload]);

export default {
  publicRoutes,
  privateRoutes,
  adminRoutes,
};
