import { Queue } from "bullmq";
import { redisConnection } from "./redis.connection.js";

export const transactionQueue = new Queue("transactions", {
  connection: redisConnection,
});
