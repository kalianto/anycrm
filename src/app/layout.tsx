import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { auth } from '../../auth';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import AppHeader from '@/components/appHeader';
import AppSideNav from '@/components/appSideNav';
import { SessionProvider } from 'next-auth/react';

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
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <SessionProvider session={session}>
          <AppHeader />
          <AppSideNav />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
