'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Group } from '@prisma/client';
// import { GroupActionDropdown } from './user-action-dropdown';

export const columns: ColumnDef<Group>[] = [
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
      const { onSelectGroup } = table.options.meta as any;
      return (
        <Link
          href='#'
          onClick={() => onSelectGroup(row.original.id)}
        >{`${row.original?.title}`}</Link>
      );
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    id: 'actions',
    cell: ({ row, table }) => {
      // return <UserActionDropdown user={row.original} />;
      return 'Actions';
    },
  },
];
