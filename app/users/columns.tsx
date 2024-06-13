'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { User } from '@prisma/client';
import { toCapitalise } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import { activateUser } from '@/actions/users/activate';
import { useState } from 'react';

// export type MockUsers = {
//   id: number;
//   name: string;
//   firstName: string;
//   lastName: string;
//   avatar: string;
//   city: string;
//   street: string;
//   postcode: string;
//   email: string;
//   phone: string;
//   gender: string;
//   age: number;
//   stars: number;
//   followers: number;
//   rating: number;
//   progress: number;
//   amount: string;
//   company: string;
//   status: 'active' | 'inactive';
// };

// export type People = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   avatar?: string;
//   city?: string;
//   street?: string;
//   postcode?: string;
//   email: string;
//   phone: string;
//   createdAt: Date;
//   status: string;
// };

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    header: 'Name',
    cell: ({ row }) => {
      return `${row.original?.firstName} ${row.original?.lastName}`;
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'provider',
    header: 'Provider',
    cell: ({ row }) => {
      return toCapitalise(row.original.provider);
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'city',
    header: 'City/Suburb',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const statusText = row.getValue('status');
      const statusTextClass =
        statusText === 'active' ? 'text-emerald-500' : 'text-red-400';
      return (
        <div className={`font-medium ${statusTextClass}`}>
          {(statusText as string).charAt(0).toUpperCase() +
            (statusText as string).slice(1)}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original;
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
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async () => {
                const updateUser = await activateUser(user.id);
                console.log(
                  '🚀🚀🚀 ~ file: columns.tsx:148 ~ updateUser:',
                  updateUser
                );
                const statusText =
                  user.status === 'active' ? 'deactivated' : 'activated';
                toast.info(`Account ${statusText}`);
              }}
            >
              {user.status === 'active' ? 'Deactivate' : 'Activate'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
