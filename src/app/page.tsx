'use server';
import { auth } from '../../auth';
import SignInPage from '@/components/auth-components';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default async function RootPage() {
  const session = await auth();
  if (!session) {
    return <SignInPage />;
  }

  console.log('🚀🚀🚀 ~ session:', session);
  revalidatePath('/home');
  redirect('/home');
}
