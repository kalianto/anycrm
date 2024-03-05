'use server';
import { auth } from '../../auth';
import Link from 'next/link';
import { SignOut } from '@/components/authComponents';

export default async function AppSideNav() {
  const session = await auth();
  // if (!session?.user) return null;

  return (
    <nav>
      <div className='nav-body'>
        <div className='nav-header'>
          <div className='nav-header-body'>
            <h2>AnyCRM</h2>
            <div className='nav-subtitle'>Anything Goes</div>
          </div>
        </div>
        <div className='nav-menu'>
          <Link href='/home'>Home</Link>
          <Link href='/signin'>Sign In</Link>
          <Link href='/settings'>Settings</Link>
        </div>
        <div className='nav-footer'>
          <div className='nav-footer-body'>
            <SignOut />
          </div>
        </div>
      </div>
    </nav>
  );
}
