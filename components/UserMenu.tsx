import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logout } from './Logout';
import { auth } from '@/lib/auth';
import Link from 'next/link';

export default async function UserMenu() {
  const session = await auth();
  const userImage: string =
    session?.user?.image ||
    'https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='rounded-full'>
          <Avatar>
            <AvatarImage src={userImage} alt={session?.user?.name!} />
            <AvatarFallback>{'...'}</AvatarFallback>
          </Avatar>
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/settings' className='w-full'>
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
