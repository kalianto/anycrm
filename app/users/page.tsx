import PageHeading from '@/components/PageHeading';
import UserView from './view';
import UserDetailsView from './details';
import UsersWidgetsView from './widgets';
import SelectedUserProvider from '@/lib/client/providers/selectedUser';

export default function UsersPage() {
  return (
    <SelectedUserProvider>
      <div className='flex flex-1 gap-8 m-8'>
        <div className='flex-auto w-2/3'>
          <div className='flex-row'>
            {/* <PageHeading>Users</PageHeading> */}
            {/* <div className='py-4'>
            <UsersWidgetsView />
            </div> */}
            <div className='py-4'>
              <UserView />
            </div>
          </div>
        </div>
        <div className='flex w-1/3'>
          <div className='flex-row w-full'>
            {/* <PageHeading>Details</PageHeading> */}
            <UserDetailsView />
          </div>
        </div>
      </div>
    </SelectedUserProvider>
  );
}
