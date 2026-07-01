// lib/db.ts
const globalForPrisma = global as unknown as { prisma: any }

let prismaClient: any

if (process.env.NODE_ENV === 'production') {
  // Production: Use PostgreSQL
  const { PrismaClient } = await import('@prisma/client')
  const { PrismaPg } = await import('@prisma/adapter-pg')
  const { Pool } = await import('pg')
  
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) throw new Error('DATABASE_URL is not set')
  
  const pool = new Pool({ connectionString })
  const adapter = new PrismaPg(pool)
  
  prismaClient = new PrismaClient({ adapter })
} else {
  // Development: Use SQLite
  const { PrismaClient } = await import('@prisma/client')
  const { PrismaBetterSqlite3 } = await import('@prisma/adapter-better-sqlite3')
  
  const sqliteAdapter = new PrismaBetterSqlite3({
    databasePath: './dev.db',
  })
  
  prismaClient = new PrismaClient({
    adapter: sqliteAdapter,
    log: ['query'],
  })
}

export const prisma = globalForPrisma.prisma || prismaClient
export default prisma