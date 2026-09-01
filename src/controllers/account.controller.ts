import type { FastifyRequest, FastifyReply } from "fastify";

export const accountController = {
  async me(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async createAccountId(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async getByAccountId(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async updateSettings(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },
};
