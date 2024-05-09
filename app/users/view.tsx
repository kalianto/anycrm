import { columns } from './columns';
import { User } from '@prisma/client';
import { DataTable } from './data-table';
import { getPeople } from '@/actions/people/get-people';

const PeopleView = async () => {
  const users = await getPeople();
  // console.log('🚀🚀🚀 ~ file: view.tsx:7 ~ users:', users);

  return (
    <div className='pt-4'>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default PeopleView;
