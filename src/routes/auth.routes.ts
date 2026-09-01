import type { FastifyInstance } from "fastify";

export async function authRoutes(app: FastifyInstance) {
  app.post("/signup", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.post("/login", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.post("/verify-email", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.post("/verify-phone", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.post("/forgot-password", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });
}
