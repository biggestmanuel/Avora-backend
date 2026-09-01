import { Queue } from "bullmq";
import { redisConnection } from "./redis.connection.js";

export const rampQueue = new Queue("ramp", {
  connection: redisConnection,
});
