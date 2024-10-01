'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const updateStatus = async (userId: number) => {
  const session = await auth();
  if (!session) return null;

  const userToUpdate = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userToUpdate) {
    return { error: 'Not found' };
  }
  const status = userToUpdate.status !== 'active' ? 'active' : 'inactive';

  const updateUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      status,
      updatedAt: new Date(),
    },
  });

  return updateUser;
};
