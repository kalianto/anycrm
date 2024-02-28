'use client';
import { useSession } from 'next-auth/react';

export default function AppHeader() {
  const { data: session, update } = useSession();

  if (!session?.user) return null;

  return (
    <header>
      <h1>Dashboard</h1>
    </header>
  );
}
