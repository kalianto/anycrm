'use client';
// import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Separator } from '@radix-ui/react-separator';

// import { getUser } from '@/actions/users/get-user';
import { User } from '@prisma/client';
import { EditUserForm } from './edit-user-form';

type EditUserSheetProps = {
  id: number;
  open: boolean;
  onOpenChange: (_open: boolean) => void;
  userData: User | null;
};

export const EditUserSheet = ({
  id,
  open,
  onOpenChange,
  userData,
}: EditUserSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {/* overwrite the classname of sm:max-w-sm to set the width of the sheet */}
      <SheetContent className='sm:max-w-4xl'>
        <SheetHeader>
          <SheetTitle>Edit User Details</SheetTitle>
          <SheetDescription>
            {`Make changes to user details profile here. Click save when you're done.`}
          </SheetDescription>
        </SheetHeader>
        <Separator className='my-4' />
        <EditUserForm
          id={id}
          preloadedData={userData}
          onOpenChange={onOpenChange}
        />
      </SheetContent>
    </Sheet>
  );
};
