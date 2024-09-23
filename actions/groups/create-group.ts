'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export interface CreateGroupProps {
  title: string;
  description: string;
}

export const createGroup = async ({ title, description }: CreateGroupProps) => {
  const session = await auth();
  console.log(title, description, session);

  // TODO: Implement RBAC here
  // const data = await prisma.group.create({
  //   data: {
  //     title,
  //     description,
  //     createdBy:
  //   }
  // });

  return {};
  // data;
};
