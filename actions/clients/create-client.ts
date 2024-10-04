'use server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { getUserByEmail } from '../users/get-user';
import { ClientStatus } from '@prisma/client';

export interface CreateClientProps {
  firstName: string;
  lastName: string;
  street?: string;
  city?: string;
  postcode?: string;
  phone: string;
  email?: string;
  status: ClientStatus;
  familyCount: number;
}

export const createClient = async (clientDetails: CreateClientProps) => {
  const session = await auth();

  console.log(
    '🚀🚀🚀 ~ file: create-client.ts:19 ~ clientDetails:',
    clientDetails
  );

  const creator = await getUserByEmail(session?.user.email!);

  const clientStatus = Object.values(ClientStatus).includes(
    clientDetails.status
  )
    ? clientDetails.status
    : ClientStatus.PENDING_APPROVAL;

  // return false;
  // TODO: Implement RBAC here
  const newClient = await prisma.client.create({
    data: {
      ...clientDetails,
      status: clientStatus,
      createdById: creator.id,
    },
  });

  return newClient;
};
