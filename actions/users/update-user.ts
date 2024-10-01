'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { UserStatus } from '@prisma/client';

interface UpdateUserOptions {
  userId: number;
  userDetails: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    postcode: string;
    phone: string;
    status: UserStatus;
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

  const status = Object.values(UserStatus).includes(userDetails.status)
    ? userDetails.status
    : UserStatus.PENDING;

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
      status,
    },
  });

  return updateUser;
};
