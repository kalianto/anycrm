import './auth.css';
import { signIn, signOut } from '../../auth';
import { Button } from 'rsuite';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function SignInPage() {
  return (
    <div className='login-wrapper'>
      <div className='login-container'>
        <h2>AnyCRM</h2>
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
      <Button type='submit' color='red' appearance='primary'>
        Sign Out
      </Button>
    </form>
  );
}
