import type { FastifyInstance } from "fastify";
import { authController } from "../controllers/auth.controller.js";

export async function authRoutes(app: FastifyInstance) {
  app.post("/signup", authController.signup);
  app.post("/login", authController.login);
  app.post("/verify-email", authController.verifyEmail);
  app.post("/verify-phone", authController.verifyPhone);
  app.post("/forgot-password", authController.forgotPassword);
}
