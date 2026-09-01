import type { FastifyInstance } from "fastify";

// TODO: authenticate connection via JWT, subscribe user to their own balance/tx-status channel
export async function registerWebsocketHandlers(app: FastifyInstance) {
  app.get("/ws", { websocket: true }, (connection, request) => {
    connection.socket.on("message", (message: Buffer) => {
      // Not implemented
    });
  });
}
