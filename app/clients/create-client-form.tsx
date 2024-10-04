import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Client, ClientStatus } from '@prisma/client';
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { createClient } from '@/actions/clients/create-client';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  phone: z.string(),
  email: z.string().optional(),
  familyCount: z.number().min(1),
  status: z.nativeEnum(ClientStatus),
});

export const CreateClientForm = ({
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
      familyCount: 1,
      status: ClientStatus.PENDING_APPROVAL,
    },
  });

  async function submitForm(data: z.infer<typeof FormSchema>) {
    try {
      const response = await createClient(data);
      toast.success(`New Client has been created successfully`, {
        action: {
          label: 'Close',
          onClick: () => {},
        },
      });
      onOpenChange(false);
      router.refresh();
    } catch (err) {
      toast.error('Something went wrong', {
        description: 'An error occurred while creating a client.',
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
        <div className='grid gap-4 grid-cols-2 py-2'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='client first name' {...field} />
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
                  <Input placeholder='client last name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='client email address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select user status' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(ClientStatus).map((clientStatus) => (
                      <SelectItem key={clientStatus} value={clientStatus}>
                        {clientStatus}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
        <div className='grid gap-4 grid-cols-2 py-2'>
          <FormField
            control={form.control}
            name='familyCount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of people in the household</FormLabel>
                <FormControl>
                  <Input placeholder='enter a number' {...field} />
                </FormControl>
                <FormDescription>Include children and adults</FormDescription>
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
