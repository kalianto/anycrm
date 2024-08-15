import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';
import { Copy, CreditCard, MoreVertical, Truck } from 'lucide-react';
import { User } from '@prisma/client';
import { useState, useEffect } from 'react';
import { getUser } from '@/actions/users/get-user';
import { toCapitalise, formatDate } from '@/lib/utils';

const UserSimpleView = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  const getUserDetails = async (id: number) => {
    const selectedUser = await getUser(id);
    setUser(selectedUser);
  };

  useEffect(() => {
    getUserDetails(userId);
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className='my-4'>
      <Card className='overflow-hidden'>
        <CardHeader className='flex flex-row items-start bg-muted/50'>
          <div className='grid gap-0.5'>
            <CardTitle className='flex items-center gap-2 text-lg'>
              {`${user.firstName} ${user.lastName}`}
            </CardTitle>
            <CardDescription className='group flex items-center gap-2'>
              {user.email}
              <Button
                size='icon'
                variant='outline'
                className='h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100'
                onClick={() => {
                  navigator.clipboard.writeText(user?.email!);
                  toast.info('Email address copied');
                }}
              >
                <Copy className='h-3 w-3' />
                <span className='sr-only'>Copy Email</span>
              </Button>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className='p-6 text-sm'>
          <div className='grid gap-3'>
            <div className='font-semibold'>Contact Details</div>
            <ul className='grid gap-3'>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Phone Number</span>
                <span>{user.phone || 'N/A '}</span>
              </li>
              {/* <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Provider</span>
                <span>{toCapitalise(user.provider)}</span>
              </li> */}
            </ul>
            {/* <Separator className='my-2' />
            <ul className='grid gap-3'>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Subtotal</span>
                <span>$299.00</span>
              </li>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Shipping</span>
                <span>$5.00</span>
              </li>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Tax</span>
                <span>$25.00</span>
              </li>
              <li className='flex items-center justify-between font-semibold'>
                <span className='text-muted-foreground'>Total</span>
                <span>$329.00</span>
              </li>
            </ul> */}
          </div>
          <Separator className='my-4' />
          <div className='grid grid-cols-2 gap-4'>
            <div className='grid gap-3'>
              <div className='font-semibold'>Address Information</div>
              <address className='grid gap-0.5 not-italic text-muted-foreground'>
                <span>Liam Johnson</span>
                <span>1234 Main St.</span>
                <span>Anytown, CA 12345</span>
              </address>
            </div>
          </div>
          <Separator className='my-4' />
          <div className='grid gap-3'>
            <div className='font-semibold'>Account Information</div>
            <dl className='grid gap-3'>
              <div className='flex items-center justify-between'>
                <dt className='text-muted-foreground'>Provider</dt>
                <dd>{toCapitalise(user.provider)}</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-muted-foreground'>Created On</dt>
                <dd>
                  <time dateTime='2023-11-23'>
                    {formatDate(user.createdAt)}
                  </time>
                </dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-muted-foreground'>Status</dt>
                <dd>{toCapitalise(user.status)}</dd>
              </div>
            </dl>
          </div>
          <Separator className='my-4' />
          <div className='grid gap-3'>
            <div className='font-semibold'>Payment Information</div>
            <dl className='grid gap-3'>
              <div className='flex items-center justify-between'>
                <dt className='flex items-center gap-1 text-muted-foreground'>
                  <CreditCard className='h-4 w-4' />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div>
        </CardContent>
        <CardFooter className='flex flex-row items-center border-t bg-muted/50 px-6 py-3'>
          <div className='text-xs text-muted-foreground'>
            Updated on{' '}
            <time dateTime='2023-11-23'>{formatDate(user.updatedAt)}</time>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserSimpleView;
