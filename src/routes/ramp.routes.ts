import type { FastifyInstance } from "fastify";

export async function rampRoutes(app: FastifyInstance) {
  app.post("/deposit", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.post("/withdraw", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.get("/status/:reference", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });
}
