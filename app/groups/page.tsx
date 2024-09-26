import SelectedGroupProvider from '@/lib/client/providers/selected-group';
import GroupListView from './group-list-view';

export default function GroupPage() {
  return (
    <SelectedGroupProvider>
      <div className='flex flex-1 gap-8 m-8'>
        <div className='flex-auto w-1/2'>
          <div className='flex-row'>
            <div className='py-4'>
              <GroupListView />
            </div>
          </div>
        </div>
        <div className='flex w-1/2'>
          <div className='flex-row w-full '>
            THIS IS GROUP USERS/PERMISSION VIEW
          </div>
        </div>
      </div>
    </SelectedGroupProvider>
  );
}
