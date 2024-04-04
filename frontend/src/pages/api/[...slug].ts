import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const isDevelopment = process.env.NODE_ENV !== 'production';

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
    bodyParser: false,
  },
};
const REST_APP_API_URL = process.env.NEXT_PUBLIC_REST_API_URL + '/api';
// skip cors and api forwarding
function handler(req: NextApiRequest, res: NextApiResponse) {
  if (isDevelopment) {
    return httpProxyMiddleware(req, res, {
      // You can use the `http-proxy` option
      target: REST_APP_API_URL ?? '',
      // In addition, you can use the `pathRewrite` option provided by `next-http-proxy-middleware`
      pathRewrite: [
        {
          patternStr: '^/api',
          replaceStr: '',
        },
      ],
    });
  }
  return res.status(404).send(null);
}
export default handler;
