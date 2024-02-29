'use client';
import { useSession } from 'next-auth/react';
import UserButton from './userButton';

export default function AppHeader() {
  const { data: session, update } = useSession();

  if (!session?.user) return null;

  return (
    <header>
      <div className='header-wrapper'>
        <div className='header-body'>
          <h1 className='title'>Dashboard</h1>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
