'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { getUserByEmail } from '../users/get-user';

export interface CreateGroupProps {
  title: string;
  description: string;
}

export const createGroup = async ({ title, description }: CreateGroupProps) => {
  const session = await auth();
  console.log(title, description, session);

  const user = await getUserByEmail(session?.user.email!!);

  // TODO: Implement RBAC here
  const group = await prisma.group.create({
    data: {
      title,
      description,
      createdById: user.id,
    },
  });

  return group;
};
