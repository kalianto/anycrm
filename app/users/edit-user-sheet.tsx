'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Pencil } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import { toast } from 'sonner';
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';

const FormSchema = z.object({
  // firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  // street: z.string().min(2).max(255),
  // city: z.string().min(2).max(255),
  // postcode: z.string().min(2).max(10),
});

type EditUserSheetProps = {
  open: boolean;
  onOpenChange: (_open: boolean) => void;
};

export const EditUserSheet = ({ open, onOpenChange }: EditUserSheetProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // firstName: '',
      lastName: '',
      // street: '',
      // city: '',
      // postcode: '',
    },
  });

  const wait = () => new Promise((resolve) => setTimeout(resolve, 10000));

  function submitForm(data: z.infer<typeof FormSchema>) {
    toast.success(`You submitted the following values: ${data}`);
    onOpenChange(false);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {/* <SheetTrigger asChild>
        <Button variant='link' onClick={() => onOpenChange(true)}>
          <Pencil className='mr-2 ml-0 h-4 w-4' />
          <span>Edit</span>
        </Button>
      </SheetTrigger> */}
      {/* overwrite the classname of sm:max-w-sm to set the width of the sheet */}
      <SheetContent className='sm:max-w-4xl'>
        <SheetHeader>
          <SheetTitle>Edit User Details</SheetTitle>
          <SheetDescription>
            {`Make changes to user details profile here. Click save when you're done.`}
          </SheetDescription>
        </SheetHeader>
        <Separator className='my-4' />
        {/* <div className='grid gap-4 py-6'> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitForm)}
            className='w-2/3 space-y-6'
          >
            {/* <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem className='mb-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                      <Label htmlFor='firstName'>First Name</Label>
                      <Input
                        placeholder='Your First Name'
                        className='col-span-3'
                        {...field}
                      />
                    </div>
                  </FormItem>
                )}
              /> */}
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      id='lastName'
                      placeholder='your last name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' loading={form.formState.isSubmitting}>
              Save changes
            </Button>
          </form>
        </Form>
        {/* </div> */}
      </SheetContent>
    </Sheet>
  );
};
