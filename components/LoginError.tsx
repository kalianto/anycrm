'use client';
import { useSearchParams } from 'next/navigation';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { match } from 'ts-pattern';

export const LoginErrorPage = () => {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error');

  return match(errorParam)
    .with('AccessDenied', () => (
      <div className='text-sm'>
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Unfortunately, you are not yet authorised to access this site.
            Please contact your administrator.
          </AlertDescription>
        </Alert>
      </div>
    ))
    .with('Configuration', () => (
      <div className='text-sm'>
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Please check your server configuration. Ensure that it is configured
            correctly.
          </AlertDescription>
        </Alert>
      </div>
    ))
    .with('Verification', () => (
      <div className='text-sm'>
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Unable to verify your token. Please close the browser and sign in
            again.
          </AlertDescription>
        </Alert>
      </div>
    ))
    .otherwise(() => null);
};
