import type { FastifyRequest, FastifyReply } from "fastify";

export const transactionController = {
  async send(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async list(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async getById(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async getStatus(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },
};
