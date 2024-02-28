'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AppSideNav() {
  const { data: session, update } = useSession();

  if (!session?.user) return null;

  return (
    <nav>
      <Link href='/home'>Home</Link>
      <Link href='/signin'>Sign In</Link>
      <Link href='/settings'>Settings</Link>
    </nav>
  );
}
