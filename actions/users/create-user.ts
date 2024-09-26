'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { getUserByEmail } from '../users/get-user';

export interface CreateUserProps {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  status: string;
}

export const createUser = async (userDetails: CreateUserProps) => {
  const session = await auth();

  const creator = await getUserByEmail(session?.user.email!);
  const newUser = await prisma.user.create({
    data: { ...userDetails, provider: '' },
  });

  return newUser;
};
