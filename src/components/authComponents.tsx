import './auth.css';
import { signIn, signOut } from '../../auth';
import { Button } from 'rsuite';
import { FaFacebook, FaGoogle, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='login-container'>
          <h2>AnyCRM</h2>
          <h6>Anything Goes</h6>
          <br />
          <h5>Sign in to continue.</h5>
          <form
            className='login-form'
            action={async () => {
              'use server';
              await signIn('google');
            }}
          >
            <div className='form-group'>
              <Button
                className='btn-google'
                startIcon={<FaGoogle />}
                type='submit'
              >
                Login with Google
              </Button>
            </div>
          </form>

          <form
            className='login-form'
            action={async () => {
              'use server';
              await signIn('facebook');
            }}
          >
            <div className='form-group'>
              <Button
                className='btn-facebook'
                startIcon={<FaFacebook />}
                type='submit'
              >
                Login with Facebook
              </Button>
            </div>
          </form>

          <div className='register'>
            {`Don't`} have an account?{' '}
            <Link className='' href='/register'>
              Create One!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
      className='w-full'
    >
      <Button
        type='submit'
        color='red'
        appearance='primary'
        startIcon={<FaSignOutAlt />}
      >
        Sign Out
      </Button>
    </form>
  );
}
