import { columns } from './columns';
import { DataTable } from './data-table';
import { getGroups } from '@/actions/groups/get-groups';
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { GroupSheet } from './group-sheet';

const GroupListView = async () => {
  const groups = await getGroups();

  return (
    <Card>
      <CardHeader className='px-7'>
        <div className='flex flex-row'>
          <div className='grow'>
            <CardTitle>List of Groups</CardTitle>
            <CardDescription>
              All groups with permission and users
            </CardDescription>
          </div>
          <div className='flex-none w-24 '>
            <GroupSheet />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={groups} />
      </CardContent>
    </Card>
  );
};

export default GroupListView;
