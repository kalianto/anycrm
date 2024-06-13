import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const getGroups = async () => {
  const session = await auth();
  // console.log('🚀🚀🚀 ~ file: get-users.ts:3 ~ session:', session);
  const data = await prisma.group.findMany({
    orderBy: {
      title: 'asc',
    },
  });
  return data;
};
