'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const getUser = async (id: number) => {
  const session = await auth();

  // TODO: RBAC here
  const data = await prisma.user.findFirstOrThrow({
    where: {
      id,
    },
  });

  return data;
};
