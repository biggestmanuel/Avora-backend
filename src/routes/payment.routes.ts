import type { FastifyInstance } from "fastify";

export async function paymentRoutes(app: FastifyInstance) {
  app.post("/request", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });

  app.get("/request/:id", async (request, reply) => {
    return reply.code(501).send({ message: "Not implemented" });
  });
}
