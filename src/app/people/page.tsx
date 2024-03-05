'use client';
import { useSession } from 'next-auth/react';

export default function PeoplePage() {
  const { data: session } = useSession();
  return (
    <div className='main'>
      <h2>Welcome {session?.user?.name}</h2>
    </div>
  );
}
