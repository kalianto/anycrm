'use client';
import '../app/signin/signin.css';
import Link from 'next/link';
import { Button } from "primereact/button";

export default function RootPage() {
  return (
    <div className='login-container'>
      <div className='flex'>
        <h3 className='mb-2'>AnyCRM</h3>
        <span className=''>Anything goes</span>
        <p
          className=''
          style={{ maxWidth: '800px' }}
        >
          Welcome to AnyCRM
        </p>
        <Button>
          <Link href="/signin">Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
