import type { FastifyRequest, FastifyReply } from "fastify";
import { transactionService } from "../services/transaction/transaction.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";
import type { ChainName } from "../chains/index.js";

function handleError(err: unknown, reply: FastifyReply) {
  const statusCode = (err as { statusCode?: number })?.statusCode ?? 500;
  const message = err instanceof Error ? err.message : "Something went wrong";
  return reply.code(statusCode).send(errorResponse(message));
}

export const transactionController = {
  async send(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = request.body as {
        recipientAccountId: string;
        asset: string;
        amount: string;
        network: ChainName;
      };
      const result = await transactionService.send({ senderId: request.userId!, ...body });
      return reply.code(201).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async list(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { page, limit } = request.query as { page?: string; limit?: string };
      const result = await transactionService.list(
        request.userId!,
        page ? parseInt(page) : 1,
        limit ? parseInt(limit) : 20
      );
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async getById(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const result = await transactionService.getById(request.userId!, id);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async getStatus(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const result = await transactionService.getStatus(request.userId!, id);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },
};
