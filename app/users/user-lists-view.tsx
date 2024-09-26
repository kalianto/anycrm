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
import { Button } from '@/components/ui/button';
import { NewUserSheet } from './new-user-sheet';

const UserListsView = async () => {
  const users = await getUsers();

  return (
    <Card>
      <CardHeader className='px-7'>
        <div className='flex flex-row'>
          <div className='grow'>
            <CardTitle>List of Users</CardTitle>
            <CardDescription>
              All users who have access to the system
            </CardDescription>
          </div>
          <div className='flex-none w-24'>
            <NewUserSheet />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={users} />
      </CardContent>
    </Card>
  );
};

export default UserListsView;
