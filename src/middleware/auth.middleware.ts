import type { FastifyRequest, FastifyReply } from "fastify";

// TODO: verify JWT from Authorization header, attach userId to request
export async function requireAuth(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.code(401).send({ message: "Unauthorized" });
  }

  throw new Error("Not implemented");
}
