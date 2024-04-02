import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'AnyCRM Portal',
  description:
    'C stands for Customer, Client, Congregation, Church, Charity, Corporate, Company',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body
        className='bg-background text-foreground'
        suppressHydrationWarning={true}
      >
        <main className=''>{children}</main>
      </body>
    </html>
  );
}
