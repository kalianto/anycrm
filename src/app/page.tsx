'use server';
import { auth } from '../../auth';
import SignInPage from '@/components/auth-components';
// import { redirect } from 'next/navigation';
// import { revalidatePath } from 'next/cache';

export default async function RootPage() {
  const session = await auth();
  if (!session) {
    return <SignInPage />;
  }

  // revalidatePath('/home');
  // redirect('/home');
  return (
    <div>
      <h2>Main Content</h2>
    </div>
  );
}
