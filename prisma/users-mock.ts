import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const filePath = path.join(__dirname, '..', 'prisma', 'seeder', 'users.json');
  const file = await fs.readFile(filePath, 'utf-8');
  const users = JSON.parse(file);

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.userPass, 10);

    await prisma.user.upsert({
      where: { userLogin: user.userLogin },
      update: {},
      create: {
        ...user,
        userPass: hashedPassword,
      },
    });
  }

  console.log('✅ User seeding completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
