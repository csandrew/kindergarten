import { PrismaClient } from '@prisma/client'
import { BetterSQLite3 } from '@prisma/adapter-better-sqlite3'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

const sqliteAdapter = new BetterSQLite3({
  databasePath: './dev.db',
})

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: sqliteAdapter,
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma