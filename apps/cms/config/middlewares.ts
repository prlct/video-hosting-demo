export default ({ env }) => ([
  {
    name: 'strapi::public',
  },
  {
    name: 'strapi::logger',
  },
  {
    name: 'strapi::errors',
  },
  {
    name: 'strapi::cors',
  },
  {
    name: 'strapi::poweredBy',
  },
  {
    name: 'strapi::query',
  },
  {
    name: 'strapi::body',
  },
  {
    name: 'strapi::session',
  },
  {
    name: 'strapi::favicon',
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("R2_PUBLIC_ACCESS_URL") ? env("R2_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("R2_PUBLIC_ACCESS_URL") ? env("R2_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  }
]);