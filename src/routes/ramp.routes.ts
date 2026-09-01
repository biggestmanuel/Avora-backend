import type { FastifyInstance } from "fastify";
import { rampController } from "../controllers/ramp.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

export async function rampRoutes(app: FastifyInstance) {
  app.post("/deposit", { preHandler: requireAuth }, rampController.deposit);
  app.post("/withdraw", { preHandler: requireAuth }, rampController.withdraw);
  app.get("/status/:reference", { preHandler: requireAuth }, rampController.getStatus);
}
