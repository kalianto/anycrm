'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const getUsers = async () => {
  const session = await auth();

  // TODO: RBAC here
  const data = await prisma.user.findMany({
    orderBy: [
      {
        firstName: 'asc',
      },
      {
        lastName: 'asc',
      },
    ],
  });
  return data;
};
