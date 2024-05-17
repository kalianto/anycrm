import { columns } from './columns';
import { User } from '@prisma/client';
import { DataTable } from './data-table';
import { getUsers } from '@/actions/users/get-users';
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const PeopleView = async () => {
  const users = await getUsers();
  // console.log('🚀🚀🚀 ~ file: view.tsx:7 ~ users:', users);

  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>List of Users</CardTitle>
        <CardDescription>
          All users who have access to the system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={users} />
      </CardContent>
    </Card>
  );
};

export default PeopleView;
