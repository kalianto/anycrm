'use client';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { EditUserSheet } from './edit-user-sheet';
import { UpdateUserStatusDialog } from './update-user-status-dialog';
import { Pencil, ActivityIcon } from 'lucide-react';
import { getUser } from '@/actions/users/get-user';

interface IUserActionDropdown {
  user: User;
}

export const UserActionDropdown = ({ user }: IUserActionDropdown) => {
  const [isUpdateStatusOpen, setUpdateStatusOpen] = useState(false);
  const [isEditUserOpen, setEditUserOpen] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  const getUserDetails = async (id: number) => {
    const selectedUser = await getUser(id);
    setUserData(selectedUser);
  };

  return (
    <>
      <DropdownMenu modal={false}>
        {/* set modal false to allow Form inside EditUserSheet to work */}
        <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
          {/* <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(user?.phone!);
            toast.info('Phone Number copied');
            }}
            >
            Copy Phone Number
            </DropdownMenuItem> */}
          <DropdownMenuItem
            onSelect={async () => {
              await getUserDetails(user.id);
              setEditUserOpen(true);
            }}
          >
            <Pencil className='mr-2 ml-0 h-4 w-4' />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setUpdateStatusOpen(true)}>
            <ActivityIcon className='mr-2 h-4 w-4' />
            <span>Update Status</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <UpdateUserStatusDialog
        id={user.id}
        open={isUpdateStatusOpen}
        status={user.status}
        onOpenChange={setUpdateStatusOpen}
        statusText={user.status === 'active' ? 'Deactivate' : 'Activate'}
      />
      <EditUserSheet
        id={user.id}
        open={isEditUserOpen}
        userData={userData}
        onOpenChange={setEditUserOpen}
      />
    </>
  );
};
