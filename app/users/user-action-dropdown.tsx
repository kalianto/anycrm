'use client';
import { useContext } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { User } from '@prisma/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { activateUser } from '@/actions/users/activate';
import { useRouter } from 'next/navigation';
import {
  SelectedUserContext,
  SelectedUserType,
} from '@/lib/client/providers/selectedUser';

interface IUserActionDropdown {
  user: User;
}

export const UserActionDropdown = ({ user }: IUserActionDropdown) => {
  const router = useRouter();
  const { setUserId } = useContext(SelectedUserContext) as SelectedUserType;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(user?.phone!);
            toast.info('Phone Number copied');
          }}
        >
          Copy Phone Number
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/users/${user.id}`}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setUserId(user.id)}>
          View details
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            try {
              const updateUser = await activateUser(user.id);
              console.log(
                '🚀🚀🚀 ~ file: columns.tsx:148 ~ updateUser:',
                updateUser
              );
              const statusText =
                user.status === 'active' ? 'deactivated' : 'activated';
              toast.success(`Account "${user.firstName}" ${statusText}`, {
                action: {
                  label: 'Close',
                  onClick: () => {},
                },
              });
              router.refresh();
            } catch (err) {
              toast.error('Something went wrong', {
                description:
                  'An error occurred while downloading your document.',
                action: {
                  label: 'Close',
                  onClick: () => {},
                },
              });
            }
          }}
        >
          {user.status === 'active' ? 'Deactivate' : 'Activate'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
