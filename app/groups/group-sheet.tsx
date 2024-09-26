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
import { CreateGroupForm } from './create-group-form';
import { Group } from '@prisma/client';

export const GroupSheet = () => {
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
        className='md:max-w-2xl sm:max-w-sm mx-auto mt-12'
        side='top'
      >
        <SheetHeader>
          <SheetTitle>Group Details</SheetTitle>
          <SheetDescription>
            {`Fill in the group details below. Click save when you're done.`}
          </SheetDescription>
        </SheetHeader>
        <Separator className='my-4' />
        <CreateGroupForm onOpenChange={setSheetOpen} />
      </SheetContent>
    </Sheet>
  );
};
