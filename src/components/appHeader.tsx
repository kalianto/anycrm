'use client';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import UserButton from './userButton';
import { getHeaderTitles } from '@/lib/utils';

export default function AppHeader() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const headerTitle = getHeaderTitles(pathname);

  return (
    <header>
      <div className='header-wrapper'>
        <div className='header-body'>
          <h1 className='title'>{headerTitle}</h1>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
