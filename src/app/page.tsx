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
      <h3>Welcome {session?.user?.name}</h3>
      <h4>Welcome {session?.user?.name}</h4>
      <h5>Welcome {session?.user?.name}</h5>
      <h6>Welcome {session?.user?.name}</h6>
    </div>
  );
}
