'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

interface UpdateUserOptions {
  userId: number;
  userDetails: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    postcode: string;
    phone: string;
  };
}

export const updateUser = async (userOptions: UpdateUserOptions) => {
  const session = await auth();
  if (!session) return null;

  const { userId, userDetails } = userOptions;
  console.log('🚀🚀🚀 ~ file: update-user.ts:21 ~ userOptions:', userOptions);
  const userToUpdate = await prisma.user.findUnique({
    where: {
      id: userOptions.userId,
    },
  });

  if (!userToUpdate) {
    return { error: 'User Not found' };
  }

  // TODO: Implement RBAC here

  const updateUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      street: userDetails.street,
      city: userDetails.city,
      postcode: userDetails.postcode,
      phone: userDetails.phone,
      updatedAt: new Date(),
    },
  });

  return updateUser;
};
