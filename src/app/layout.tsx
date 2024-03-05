import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { auth } from '../../auth';
import AppHeader from '@/components/appHeader';
import AppSideNav from '@/components/appSideNav';
import { SessionProvider } from 'next-auth/react';
import { CustomProvider } from 'rsuite';
import SignInPage from '@/components/authComponents';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AnyCRM Portal',
  description:
    'C stands for Customer, Client, Congregation, Church, Charity, Corporate, Company',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    return (
      <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <SignInPage />
      </body>
      </html>
    );
  }

  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <SessionProvider session={session}>
          <AppHeader />
          <AppSideNav />
          <main>
            <CustomProvider theme='dark'>{children}</CustomProvider>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
