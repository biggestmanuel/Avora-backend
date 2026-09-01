import type { FastifyRequest, FastifyReply } from "fastify";

export const rampController = {
  async deposit(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async withdraw(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async getStatus(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },
};
