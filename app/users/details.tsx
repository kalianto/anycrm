'use client';
import { useContext } from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import UserSimpleView from './user-simple-view';
import {
  SelectedUserContext,
  SelectedUserType,
} from '@/lib/client/providers/selected-user';
import { match } from 'ts-pattern';
} from '@/lib/client/providers/selected-user';
import { match } from 'ts-pattern';

const UserDetailsView = () => {
  const { userId } = useContext(SelectedUserContext) as SelectedUserType;
  const hasUserId = userId > 0;
  return match({ hasUserId })
    .with({ hasUserId: true }, () => <UserSimpleView userId={userId} />)
    .otherwise(() => (
      <div className='my-4'>
        <Card>
          <CardHeader className='w-full flex flex-row items-start bg-muted/50'>
            <div className='grid gap-0.5'>
              <CardTitle className='group flex items-center gap-2 text-lg'>
                No user selected.
              </CardTitle>
              <CardDescription>{`Click on "View Details"`}</CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    ));
};

export default UserDetailsView;
