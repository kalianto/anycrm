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

interface IUserActionDropdown {
  user: User;
}

export const UserActionDropdown = ({ user }: IUserActionDropdown) => {
  const [isUpdateStatusOpen, setUpdateStatusOpen] = useState(false);
  const [isEditUserOpen, setEditUserOpen] = useState(false);

  return (
    <>
      <DropdownMenu modal={false}>
        {/* set modal false to allow Form inside EditUserSheet to work */}
        <DropdownMenuTrigger asChild>
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
          <DropdownMenuItem onSelect={() => setEditUserOpen(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setUpdateStatusOpen(true)}>
            Update Status
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
      <EditUserSheet open={isEditUserOpen} onOpenChange={setEditUserOpen} />
    </>
  );
};
