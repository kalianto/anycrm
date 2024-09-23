'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const getGroups = async () => {
  const session = await auth();

  // TODO: Implement RBAC here
  const data = await prisma.group.findMany({
    orderBy: {
      title: 'asc',
    },
  });
  return data;
};
