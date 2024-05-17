'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Bell, Home, LineChart, ShoppingCart, User, Users } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useSession } from 'next-auth/react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import AnyCRMLogo from '@/images/anycrm_logo.png';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  console.log('🚀🚀🚀 ~ file: Sidebar.tsx:25 ~ status:', status);
  console.log('🚀🚀🚀 ~ file: Sidebar.tsx:25 ~ session:', session);
  const menuItemClass =
    'flex items-center gap-3 rounded-lg px-3 py-3 transition-all hover:text-primary';
  const menuItemInactive = 'text-muted-foreground';
  const menuItemActive = 'bg-slate-300';
  return (
    <div className='flex flex-1 hidden border-r bg-muted/40 md:block h-screen overflow-hidden'>
      <div className='flex h-screen max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <Image src={AnyCRMLogo} alt='AnyCRM - Anything Goes' className='' />
          </Link>
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-8' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-base font-medium lg:px-4'>
            <Link
              href='/'
              className={`${menuItemClass} ${
                pathname === '/' ? menuItemActive : menuItemInactive
              }`}
            >
              <Home className='h-4 w-4' />
              Dashboard
            </Link>
            <Link
              href='/orders'
              className={`${menuItemClass} ${
                pathname === '/orders' ? menuItemActive : menuItemInactive
              }`}
            >
              <ShoppingCart className='h-4 w-4' />
              Orders
              <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                6
              </Badge>
            </Link>
            <Link
              href='/analytics'
              className={`${menuItemClass} ${
                pathname === '/analytics' ? menuItemActive : menuItemInactive
              }`}
            >
              <LineChart className='h-4 w-4' />
              Analytics
            </Link>
            <Separator className='my-4' />
            <div className='font-semibold pb-2'>Administration</div>
            <Link
              href='/users'
              className={`${menuItemClass} ${
                pathname === '/users' ? menuItemActive : menuItemInactive
              }`}
            >
              <User className='h-4 w-4' />
              Users
            </Link>
            <Link
              href='/groups'
              className={`${menuItemClass} ${
                pathname === '/groups' ? menuItemActive : menuItemInactive
              }`}
            >
              <Users className='h-4 w-4' />
              Groups
            </Link>
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <Card>
            <CardHeader className='p-2 pt-0 md:p-4'>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
              <Button size='sm' className='w-full'>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
