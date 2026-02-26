import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

/**
 * Prisma Client singleton instance with connection pooling
 * Prevents multiple instances in development with hot reloading
 * Works with BetterAuth's prismaAdapter
 */
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

/**
 * Disconnect Prisma client
 * Useful for testing or cleanup
 */
export async function disconnectPrisma() {
  await prisma.$disconnect();
}
