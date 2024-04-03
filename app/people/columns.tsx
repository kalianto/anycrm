'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
export type MockUsers = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  avatar: string;
  city: string;
  street: string;
  postcode: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  stars: number;
  followers: number;
  rating: number;
  progress: number;
  amount: string;
  company: string;
  status: 'active' | 'inactive';
};

export const columns: ColumnDef<MockUsers>[] = [
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
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
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
];
