import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
