import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User, UserStatus } from '@prisma/client';
import { createUser } from '@/actions/users/create-user';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { useEffect } from 'react';

const FormSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  phone: z.string(),
  email: z.string().email('This is an invalid email address'),
  status: z.nativeEnum(UserStatus),
});

export const NewUserForm = ({
  onOpenChange,
}: {
  onOpenChange: (_open: boolean) => void;
}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      postcode: '',
      phone: '',
      email: '',
      status: UserStatus.ACTIVE,
    },
  });

  useEffect(() => {
    form.reset();
  }, [form]);

  async function submitForm(data: z.infer<typeof FormSchema>) {
    try {
      const updateUserObject = await createUser(data);
      toast.success(`New User has been created successfully`);
      onOpenChange(false);
      router.refresh();
    } catch (err) {
      toast.error('Something went wrong', {
        description: 'An error occurred while creating a new user.',
        action: {
          label: 'Close',
          onClick: () => {},
        },
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className='space-y-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='user email address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='grid gap-4 grid-cols-2 py-2'>
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
        <div className='grid gap-4 grid-cols-2 py-2'>
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
        <div className='grid gap-4 grid-cols-2 py-2'>
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone or Mobile</FormLabel>
                <FormControl>
                  <Input
                    placeholder='phone or mobile number with international code'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Include the international code eg. +61 431 234 567
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                <div className='space-y-0.5'>
                  <FormLabel className='text-base'>Status</FormLabel>
                  <FormDescription>Activate this user?</FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value === UserStatus.ACTIVE ? true : false}
                    onCheckedChange={(e) => {
                      form.setValue(
                        'status',
                        e === true ? UserStatus.ACTIVE : UserStatus.INACTIVE
                      );
                    }}
                  />
                </FormControl>
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
