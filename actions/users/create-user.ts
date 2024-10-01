'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { getUserByEmail } from '../users/get-user';
import { UserStatus } from '@prisma/client';

export interface CreateUserProps {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  status: UserStatus;
}

export const createUser = async (userDetails: CreateUserProps) => {
  const session = await auth();

  const creator = await getUserByEmail(session?.user.email!);

  const userStatus = Object.values(UserStatus).includes(userDetails.status)
    ? userDetails.status
    : UserStatus.PENDING;

  const newUser = await prisma.user.create({
    data: { ...userDetails, provider: '', status: userStatus },
  });

  return newUser;
};
