import type { FastifyInstance } from "fastify";
import { walletController } from "../controllers/wallet.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

export async function walletRoutes(app: FastifyInstance) {
  app.get("/balances", { preHandler: requireAuth }, walletController.getBalances);
  app.get("/addresses", { preHandler: requireAuth }, walletController.getAddresses);
  app.post("/resolve/:accountId", { preHandler: requireAuth }, walletController.resolveAccountId);
}
