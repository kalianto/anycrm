import SelectedClientProvider from '@/lib/client/providers/selected-client';
import ClientListView from './client-list-view';

export default function ClientPage() {
  return (
    <SelectedClientProvider>
      <div className='mx-8 my-4'>
        <div className='py-4 max-w-screen'>
          <ClientListView />
        </div>
      </div>
    </SelectedClientProvider>
  );
}
