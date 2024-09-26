'use client';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { NewUserForm } from './new-user-form';

export const NewUserSheet = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      {/* overwrite the classname of sm:max-w-sm to set the width of the sheet */}
      <SheetTrigger asChild>
        <Button className='float-right' onClick={() => setSheetOpen(true)}>
          Add New
        </Button>
      </SheetTrigger>
      <SheetContent
        className='lg:max-w-3xl md:max-w-2xl sm:max-w-sm mx-auto mt-12'
        side='top'
      >
        <SheetHeader>
          <SheetTitle>Add New User</SheetTitle>
          <SheetDescription>
            {`Enter the new user details below. Click save when you're done.`}
          </SheetDescription>
        </SheetHeader>
        <Separator className='my-4' />
        <NewUserForm onOpenChange={setSheetOpen} />
      </SheetContent>
    </Sheet>
  );
};
