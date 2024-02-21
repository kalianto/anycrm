import Link from 'next/link';

export default function AppSideNav() {
  return <nav>
  <Link href='/home'>Home</Link>
  <Link href='/signin'>Sign In</Link>
  <Link href='/settings'>Settings</Link>
</nav>
}
