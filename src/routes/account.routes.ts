import type { FastifyInstance } from "fastify";

export async function accountRoutes(app: FastifyInstance) {
  app.get("/me", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.post("/create-account-id", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.get("/:accountId", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.patch("/settings", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });
}
