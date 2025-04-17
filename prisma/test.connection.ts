// test connection to supabase
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$queryRaw`SELECT NOW()`;
  console.log('Connected! Current time:', result);
}

main().catch((err) => {
  console.error('❌ Connection failed:', err);
});
