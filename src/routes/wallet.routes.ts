import type { FastifyInstance } from "fastify";

export async function walletRoutes(app: FastifyInstance) {
  app.get("/balances", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.get("/addresses", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.post("/resolve/:accountId", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });
}
