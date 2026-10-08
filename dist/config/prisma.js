"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const prisma_1 = require("../generated/prisma");
const adapter_pg_1 = require("@prisma/adapter-pg");
const connectionString = process.env.DATABASE_URL || '';
const adapter = new adapter_pg_1.PrismaPg({
    connectionString,
});
// Singleton Prisma instance to avoid connection pool exhaustion
exports.prisma = new prisma_1.PrismaClient({ adapter });
