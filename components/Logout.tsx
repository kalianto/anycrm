import { signOut } from '../auth';
import { Button } from '@/components/ui/button';

export function Logout() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
      className='w-full'
    >
      <Button
        className='h-8 bg-red-400'
        type='submit'
        variant='ghost'
      >
        Log out
      </Button>
    </form>
  );
}