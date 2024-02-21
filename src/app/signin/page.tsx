import './signin.css';
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function SignInPage() {
  return (
    <div className='login-wrapper'>
      <div className='login-container'>
        <h2>Login</h2>
        <form className='login-form'>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required />
          </div>
          <div className='form-group'>
            <Button type='button'>
              <Link href='/home'>Login</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
