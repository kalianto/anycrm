import { cache } from 'react';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const getUsers = cache(async () => {
  const session = await auth();
  // console.log('🚀🚀🚀 ~ file: get-users.ts:3 ~ session:', session);
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
});
