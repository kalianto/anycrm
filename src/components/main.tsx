import AppHeader from '@/components/appHeader';
import AppSideNav from '@/components/appSideNav';
import { CustomProvider } from 'rsuite';
import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function MainPage() {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (!session?.user && pathname != '/') {
    redirect('/');
  }

  return (
    <>
      <AppHeader />
      <AppSideNav />
      <main>
        <CustomProvider theme='dark'>{children}</CustomProvider>
      </main>
    </>
  );
}
