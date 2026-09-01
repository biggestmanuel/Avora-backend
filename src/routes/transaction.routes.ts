import type { FastifyInstance } from "fastify";

export async function transactionRoutes(app: FastifyInstance) {
  app.post("/send", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.get("/", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.get("/:id", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.get("/:id/status", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });
}
