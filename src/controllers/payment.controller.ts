import type { FastifyRequest, FastifyReply } from "fastify";
import { paymentService } from "../services/payment/payment.service.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

function handleError(err: unknown, reply: FastifyReply) {
  const statusCode = (err as { statusCode?: number })?.statusCode ?? 500;
  const message = err instanceof Error ? err.message : "Something went wrong";
  return reply.code(statusCode).send(errorResponse(message));
}

export const paymentController = {
  async createRequest(request: FastifyRequest, reply: FastifyReply) {
    try {
      const result = await paymentService.createRequest(request.userId!, request.body as any);
      return reply.code(201).send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },

  async getRequest(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const result = await paymentService.getRequest(id);
      return reply.send(successResponse(result));
    } catch (err) {
      return handleError(err, reply);
    }
  },
};
