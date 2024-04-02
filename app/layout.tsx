import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';
import { auth } from '../auth';
import { LoginPage } from '@/components/Login';
import { SessionProvider } from 'next-auth/react';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
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
  console.log("🚀🚀🚀 ~ file: layout.tsx:25 ~ session:", session);

  if (!session) {
    return (
      <html lang='en' className={GeistSans.className}>
      <body
        className='bg-background text-foreground'
        suppressHydrationWarning={true}
      >
        <LoginPage />
      </body>
    </html>
    )
  }

  return (
    <html lang='en' className={GeistSans.className}>
      <body
        className='bg-background text-foreground'
        suppressHydrationWarning={true}
      >
        <SessionProvider session={session}>
          <main className=''>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
