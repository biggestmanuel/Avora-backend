import type { FastifyRequest, FastifyReply } from "fastify";
import { walletService } from "../services/wallet/wallet.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

function handleError(err: unknown, reply: FastifyReply) {
  const statusCode = (err as { statusCode?: number })?.statusCode ?? 500;
  const message = err instanceof Error ? err.message : "Something went wrong";
  return reply.code(statusCode).send(errorResponse(message));
}

export const walletController = {
  async getBalances(request: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await walletService.getBalances(request.userId!);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async getAddresses(request: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await walletService.getAddresses(request.userId!);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async resolveAccountId(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { accountId } = request.params as { accountId: string };
      const result = await walletService.resolveAccountId(accountId);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },
};
