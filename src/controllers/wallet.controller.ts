import type { FastifyRequest, FastifyReply } from "fastify";

export const walletController = {
  async getBalances(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async getAddresses(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async resolveAccountId(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },
};
