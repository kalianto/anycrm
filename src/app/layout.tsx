import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { auth } from '../../auth';
import AppHeader from '@/components/appHeader';
import AppSideNav from '@/components/appSideNav';
import { SessionProvider } from 'next-auth/react';
import { CustomProvider, Container, Footer } from 'rsuite';
import SignInPage, { SignOut } from '@/components/authComponents';
import './globals.css';

const font = Raleway({ subsets: ['latin'] });

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
        <body className={font.className} suppressHydrationWarning={true}>
          <SignInPage />
        </body>
      </html>
    );
  }

  return (
    <html lang='en'>
      <body className={font.className} suppressHydrationWarning={true}>
        <SessionProvider session={session}>
          <AppHeader />
          <AppSideNav />
          <main>
            <CustomProvider theme='dark'>{children}</CustomProvider>
          </main>
          {/* <div className='nav-footer'>
            <div className='nav-footer-body'>
            <SignOut />
            </div>
          </div> */}
          <Container className='footer-bottom-left'>
            <Footer>
              <SignOut />
            </Footer>
          </Container>
        </SessionProvider>
      </body>
    </html>
  );
}
