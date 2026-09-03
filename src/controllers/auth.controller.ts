import type { FastifyRequest, FastifyReply } from "fastify";
import { authService } from "../services/auth/auth.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

function handleError(err: unknown, reply: FastifyReply) {
  const statusCode = (err as { statusCode?: number })?.statusCode ?? 500;
  const message = err instanceof Error ? err.message : "Something went wrong";
  return reply.code(statusCode).send(errorResponse(message));
}

export const authController = {
  async signup(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as { email: string; phone?: string; password: string };
      const result = await authService.signup(body);
      return reply.code(201).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as { email: string; password: string };
      const result = await authService.login(body);
      return reply.code(200).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async verifyEmail(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as { userId: string; code: string };
      const result = await authService.verifyEmail(body);
      return reply.code(200).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async verifyPhone(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as { userId: string; code: string };
      const result = await authService.verifyPhone(body);
      return reply.code(200).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async forgotPassword(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as { email: string };
      const result = await authService.requestPasswordReset(body);
      return reply.code(200).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async setPin(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as { pin: string };
      const result = await authService.setPin(request.userId!, body.pin);
      return reply.code(200).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async verifyPin(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as { pin: string };
      const result = await authService.verifyPin(request.userId!, body.pin);
      return reply.code(200).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },
};
