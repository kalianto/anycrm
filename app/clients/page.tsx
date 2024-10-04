import SelectedClientProvider from '@/lib/client/providers/selected-client';
import ClientListView from './client-list-view';

export default function ClientPage() {
  return (
    <SelectedClientProvider>
      <div className='flex flex-1 gap-8 m-8'>
        <div className='flex-auto w-1/2'>
          <div className='flex-row'>
            <div className='py-4'>
              <ClientListView />
            </div>
          </div>
        </div>
        <div className='flex w-1/2'>
          <div className='flex-row w-full '>THIS IS CLIENT DETAILS VIEW</div>
        </div>
      </div>
    </SelectedClientProvider>
  );
}
