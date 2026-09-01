import type { FastifyError, FastifyRequest, FastifyReply } from "fastify";
import { logger } from "../config/logger.js";

export function errorHandler(error: FastifyError, request: FastifyRequest, reply: FastifyReply) {
  logger.error({ err: error, url: request.url }, "Request error");

  const statusCode = error.statusCode ?? 500;
  reply.code(statusCode).send({
    message: statusCode === 500 ? "Internal server error" : error.message,
  });
}
