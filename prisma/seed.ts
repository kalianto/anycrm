import prisma from '../lib/prisma';
import permissions from './seeds/permissions';

async function main() {
  // TODO: do this better
  permissions.forEach(async (permission) => {
    await prisma.permission.upsert({
      where: { id: permission.id },
      update: {},
      create: {
        ...permission,
      },
    });
  });
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
