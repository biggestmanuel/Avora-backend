import { Worker } from "bullmq";
import { redisConnection } from "../queues/redis.connection.js";
import { logger } from "../config/logger.js";

// TODO: poll Bachs for deposit/withdrawal status, update RampTransaction row
export const rampWorker = new Worker(
  "ramp",
  async (job) => {
    logger.info({ jobId: job.id }, "Processing ramp job");
    throw new Error("Not implemented");
  },
  { connection: redisConnection }
);
