/**
 * ADD THIS ROUTE to your existing routes/wallet.routes.ts
 * (registered under the /api/wallet prefix per your app.ts setup)
 */

import { FastifyInstance } from 'fastify';
import { registerWalletsHandler } from '../controllers/wallet/registerWallets.controller';
// import your existing auth middleware here, e.g.:
// import { authMiddleware } from '../middleware/auth.middleware';

export async function walletRegisterRoute(fastify: FastifyInstance) {
  fastify.post(
    '/register',
    {
      // preHandler: [authMiddleware],
    },
    registerWalletsHandler
  );
}

/**
 * In wallet.routes.ts, alongside your other route registrations:
 *
 *   fastify.register(walletRegisterRoute, { prefix: '/wallet' });
 *
 * Full endpoint: POST /api/wallet/register
 */
