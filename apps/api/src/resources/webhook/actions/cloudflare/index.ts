import crypto from 'crypto'
import { omit } from 'lodash';

import config from 'config';

import { AppKoaContext, AppRouter, Next } from 'types';
import { files as Files } from 'models/files';

async function validator(ctx: AppKoaContext, next: Next) {
  const signature = (ctx.request.header['webhook-signature'] as string).split(',');

  ctx.assertError(signature, 'Cloudflare signature header is missing');
  ctx.assertError(config.CLOUDFLARE_WEBHOOK_SECRET, 'Webhook secret is missing');

  const time = signature[0].split('=')[1]
  const sig1 = signature[1].split('=')[1]

  const key = config.CLOUDFLARE_WEBHOOK_SECRET;
  const message = `${time}.${ctx.request.rawBody}`;

  const hash = crypto.createHmac('sha256', key as string).update(message);

  const sig2 = hash.digest('hex');

  if (sig2 !== sig1) {
    ctx.throwError('Invalid signature');
  }

  await next();
}

async function handler(ctx: AppKoaContext) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = ctx.request.body;

  console.log('here')

  const file = await Files.findOne({ where: { provider_metadata: { streamId: response.uid } }, raw: true });

  console.log('file', file)

  console.log('response', response)
  // const video = await videoService.findOne({ streamId: response.uid });

  if (file) {
    await Files.update(
      {
        provider_metadata: {
          ...file.provider_metadata,
          ...omit(response, ['uid', 'readyToStream', 'creator'])
        }
      },
      {
        where: { id: file.id },
      },
    );
  }

  ctx.status = 200;
}

export default (router: AppRouter) => {
  router.post('/cloudflare', validator, handler);
};
