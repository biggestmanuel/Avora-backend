import { Worker } from "bullmq";
import { redisConnection } from "../queues/redis.connection.js";
import { logger } from "../config/logger.js";

// TODO: poll chain adapters for confirmation status, update Transaction row, emit websocket event
export const transactionWorker = new Worker(
  "transactions",
  async (job) => {
    logger.info({ jobId: job.id }, "Processing transaction job");
    throw new Error("Not implemented");
  },
  { connection: redisConnection }
);
