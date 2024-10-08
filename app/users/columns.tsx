'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { User, UserStatus } from '@prisma/client';
import { UserActionDropdown } from './user-action-dropdown';

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
    cell: ({ row, table }) => {
      // return `${row.original?.firstName} ${row.original?.lastName}`;
      const { onSelectUser } = table.options.meta as any;
      return (
        <Link
          href='#'
          onClick={() => onSelectUser(row.original.id)}
        >{`${row.original?.firstName} ${row.original?.lastName}`}</Link>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  // {
  //   accessorKey: 'provider',
  //   header: 'Provider',
  //   cell: ({ row }) => {
  //     return toCapitalise(row.original.provider);
  //   },
  // },
  // {
  //   accessorKey: 'phone',
  //   header: 'Phone',
  // },
  // {
  //   accessorKey: 'city',
  //   header: 'City/Suburb',
  // },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const statusText = row.getValue('status');
      const statusTextClass =
        statusText === UserStatus.ACTIVE ? 'text-emerald-500' : 'text-red-400';
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
    cell: ({ row, table }) => {
      return <UserActionDropdown user={row.original} />;
    },
  },
];
