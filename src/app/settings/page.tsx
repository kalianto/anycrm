'use client';
import { useSession } from 'next-auth/react';

export default function SettingsPage() {

  const { data: session, update } = useSession();

  return (
    <div className="main">
      <h2>Setting page for {session?.user?.name}</h2>
      <h3>Setting page for {session?.user?.name}</h3>
      <h4>Setting page for {session?.user?.name}</h4>
      <h5>Setting page for {session?.user?.name}</h5>
      <h6>Setting page for {session?.user?.name}</h6>
    </div>
  );
}
