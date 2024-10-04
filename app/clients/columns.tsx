'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Client } from '@prisma/client';

export const columns: ColumnDef<Client>[] = [
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
      const { onSelectClient } = table.options.meta as any;
      return (
        <Link
          href='#'
          onClick={() => onSelectClient(row.original.id)}
        >{`${row.original?.firstName} ${row.original?.lastName}`}</Link>
      );
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone/Mobile',
  },
  {
    accessorKey: 'city',
    header: 'Suburb/City',
  },
  {
    id: 'actions',
    cell: ({ row, table }) => {
      // return <UserActionDropdown user={row.original} />;
      return 'Actions';
    },
  },
];
