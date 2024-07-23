import { columns } from './columns';
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
