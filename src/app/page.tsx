'use server';
import { auth } from '../../auth';
import SignInPage from '@/components/authComponents';


export default async function RootPage() {
  const session = await auth();
  // if (!session) {
  //   return <SignInPage />;
  // }

  return (
    <div className="main">
      <h2>Welcome {session?.user?.name}</h2>
    </div>
  );
}
