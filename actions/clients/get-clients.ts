'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const getClients = async () => {
  const session = await auth();

  // TODO: Implement RBAC here
  const data = await prisma.client.findMany({
    orderBy: {
      firstName: 'asc',
      // lastName: 'asc',
    },
  });
  return data;
};
