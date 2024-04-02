import Image from 'next/image';
import Link from 'next/link';
import loginImage from '@/images/14562384_5490518.svg';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FaFacebookSquare , FaGoogle } from 'react-icons/fa';
import { signIn, signOut } from '../auth';

export function LoginPage() {
  return (
    <div className='flex-1 w-full flex flex-row item-center'>
      <div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
        <div className='flex items-center justify-center py-12'>
          <div className='mx-auto grid w-[350px] gap-6'>
            <div className='grid gap-2 text-center'>
              <h1 className='text-3xl font-bold'>AnyCRM Login</h1>
              <p className='text-balance text-muted-foreground'>
                Welcome back!
              </p>
            </div>
            <div className='grid gap-4'>
              <form
                className='login-form'
                action={async () => {
                  'use server';
                  await signIn('google');
                }}
              >
                <Button type='submit' className='w-full'>
                  <FaGoogle /> <span className='pl-2'>Login with Google</span>
                </Button>
              </form>
              <Separator className='my-2'  />
              <form
                className='login-form'
                action={async () => {
                  'use server';
                  await signIn('facebook');
                }}
              >
                <Button variant='outline' className='w-full'>
                  <FaFacebookSquare  />
                  <span className='pl-2' >Login with Facebook</span>
                </Button>
              </form>
            </div>
            <div className='mt-4 text-center text-sm'>
              Don&apos;t have an account?{' '}
              <Link href='#' className='underline'>
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className='hidden lg:block'>
          <Image
            src={loginImage}
            alt='Image'
            className='dark:brightness-[0.2] dark:grayscale w-11/12 h-11/12'
          />
        </div>
      </div>
    </div>
  );
}
