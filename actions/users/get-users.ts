import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const getUsers = async () => {
  const session = await auth();
  console.log('🚀🚀🚀 ~ file: get-people.ts:3 ~ session:', session);
  const data = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
};
