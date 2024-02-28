import { signIn, auth } from '../../auth';
import './auth.css';
import { Button } from 'primereact/button';

export default async function SignInPage() {
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
            <Button className='btn-google'>Login with Google</Button>
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
            <Button className='btn-facebook'>Login with Facebook</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
