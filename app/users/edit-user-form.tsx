import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { updateUser } from '@/actions/users/update-user';
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { useEffect } from 'react';

const FormSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
});

export const EditUserForm = ({
  id,
  preloadedData,
  onOpenChange,
}: {
  id: number;
  preloadedData: User | null;
  onOpenChange: (_open: boolean) => void;
}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: preloadedData?.firstName,
      lastName: preloadedData?.lastName,
      street: preloadedData?.street || '',
      city: preloadedData?.city || '',
      postcode: preloadedData?.postcode || '',
    },
  });

  useEffect(() => {
    form.reset();
  }, [preloadedData, form]);

  async function submitForm(data: z.infer<typeof FormSchema>) {
    try {
      const updateUserObject = await updateUser({
        userId: id,
        userDetails: {
          firstName: data.firstName,
          lastName: data.lastName,
          street: data.street,
          city: data.city,
          postcode: data.postcode,
        },
      });
      toast.success(`User details has been updated successfully`);
      router.refresh();
      onOpenChange(false);
    } catch (err) {
      toast.error('Something went wrong', {
        description: 'An error occurred while updating user details.',
        action: {
          label: 'Close',
          onClick: () => {},
        },
      });
    }
  }

  if (!preloadedData) {
    return null;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className='space-y-6'>
        <div className='grid gap-4 grid-cols-2'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='your first name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='your last name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='street'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input
                  placeholder='your street address and number'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='grid gap-4 grid-cols-2'>
          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder='your city or suburb' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='postcode'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input placeholder='your postcode' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit' loading={form.formState.isSubmitting}>
          Save changes
        </Button>
      </form>
    </Form>
  );
};
