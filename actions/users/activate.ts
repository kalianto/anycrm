'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { auth } from '@/lib/auth';

export const activateUser = async (userId: number) => {
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
    },
  });
  console.log('🚀🚀🚀 ~ file: activate.ts:5 ~ userId:', userId, session);
  revalidatePath('/users');
  return updateUser;
};
