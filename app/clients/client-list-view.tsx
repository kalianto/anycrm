import { columns } from './columns';
import { DataTable } from './data-table';
import { getClients } from '@/actions/clients/get-clients';
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { ClientSheet } from './client-sheet';

const ClientListView = async () => {
  const groups = await getClients();

  return (
    <Card>
      <CardHeader className='px-7'>
        <div className='flex flex-row'>
          <div className='grow'>
            <CardTitle>List of Clients</CardTitle>
            <CardDescription>
              These are the list of client who have registered.
            </CardDescription>
          </div>
          <div className='flex-none w-24 '>
            <ClientSheet />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={groups} />
      </CardContent>
    </Card>
  );
};

export default ClientListView;
