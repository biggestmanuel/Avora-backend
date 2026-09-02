import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env.js";
import { logger } from "./logger.js";

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });

export const prisma = new PrismaClient({
  adapter,
  log: env.NODE_ENV === "development" ? ["query", "warn", "error"] : ["warn", "error"],
});

export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect();
    logger.info("Database connected");
  } catch (err) {
    logger.error({ err }, "Failed to connect to database");
    throw err;
  }
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  logger.info("Database disconnected");
}
