// import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

// create a new user
export async function POST(req: Request) {
  const session = await auth();
}
