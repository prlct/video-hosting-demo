import psl from 'psl';
import url from 'url';

import config from 'config';

import { COOKIES, TOKEN_SECURITY_EXPIRES_IN } from 'app-constants';
import { AppKoaContext } from 'types';

export const setTokenCookies = ({ ctx, accessToken }: { ctx: AppKoaContext; accessToken: string }) => {
  const parsedUrl = url.parse(config.WEB_URL);

  if (!parsedUrl.hostname) {
    return;
  }

  const parsed = psl.parse(parsedUrl.hostname) as psl.ParsedDomain;
  const cookiesDomain = parsed.domain || undefined;

  ctx.cookies.set(COOKIES.ACCESS_TOKEN, accessToken, {
    httpOnly: true,
    sameSite: 'none', // Allows cross-origin requests
    domain: cookiesDomain,
    expires: new Date(Date.now() + TOKEN_SECURITY_EXPIRES_IN * 1000), // seconds to miliseconds
  });
};

export const unsetTokenCookies = (ctx: AppKoaContext) => {
  const parsedUrl = url.parse(config.WEB_URL);

  if (!parsedUrl.hostname) {
    return;
  }

  const parsed = psl.parse(parsedUrl.hostname) as psl.ParsedDomain;
  const cookiesDomain = parsed.domain || undefined;

  ctx.cookies.set(COOKIES.ACCESS_TOKEN, null, {
    httpOnly: true,
    sameSite: 'none', // Allows cross-origin requests
    domain: cookiesDomain,
  });
};

export default {
  setTokenCookies,
  unsetTokenCookies,
};
