import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Home, LineChart, Menu, ShoppingCart, User, Users } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SidebarDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='flex flex-col'>
        <nav className='grid gap-2 text-lg font-medium'>
          <Link
            href='#'
            className='flex items-center gap-2 text-lg font-semibold'
          >
            <span className='sr-only'>AnyCRM</span>
          </Link>
          <Link
            href='#'
            className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
          >
            <Home className='h-5 w-5' />
            Dashboard
          </Link>
          <Link
            href='#'
            className='mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground'
          >
            <ShoppingCart className='h-5 w-5' />
            Orders
            <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
              6
            </Badge>
          </Link>
          <Link
            href='/groups'
            className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
          >
            <Users className='h-5 w-5' />
            Groups
          </Link>
          <Link
            href='/users'
            className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
          >
            <User className='h-5 w-5' />
            Users
          </Link>
          <Link
            href='#'
            className='mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
          >
            <LineChart className='h-5 w-5' />
            Analytics
          </Link>
        </nav>
        <div className='mt-auto hidden'>
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size='sm' className='w-full'>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
