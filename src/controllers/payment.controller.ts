import type { FastifyRequest, FastifyReply } from "fastify";

export const paymentController = {
  async createRequest(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async getRequest(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },
};
