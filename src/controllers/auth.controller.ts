import type { FastifyRequest, FastifyReply } from "fastify";

export const authController = {
  async signup(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async login(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async verifyEmail(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async verifyPhone(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },

  async forgotPassword(request: FastifyRequest, reply: FastifyReply) {
    return reply.code(501).send({ message: "Not implemented" });
  },
};
