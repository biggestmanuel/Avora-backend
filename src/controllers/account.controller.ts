import type { FastifyRequest, FastifyReply } from "fastify";
import { accountService } from "../services/account/account.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

function handleError(err: unknown, reply: FastifyReply) {
  const statusCode = (err as { statusCode?: number })?.statusCode ?? 500;
  const message = err instanceof Error ? err.message : "Something went wrong";
  return reply.code(statusCode).send(errorResponse(message));
}

export const accountController = {
  async me(request: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await accountService.me(request.userId!);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async createAccountId(request: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await accountService.createAccountId(request.userId!);
      return reply.code(201).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async getByAccountId(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { accountId } = request.params as { accountId: string };
      const result = await accountService.getByAccountId(accountId);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async updateSettings(request: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await accountService.updateSettings(request.userId!, request.body as any);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },
};
