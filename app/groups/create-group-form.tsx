import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Group } from '@prisma/client';
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { createGroup } from '@/actions/groups/create-group';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  title: z.string().min(2).max(255),
  description: z.string().min(2).max(1024),
});

export const CreateGroupForm = ({
  onOpenChange,
}: {
  onOpenChange: (_open: boolean) => void;
}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  async function submitForm(data: z.infer<typeof FormSchema>) {
    try {
      const response = await createGroup(data);
      toast.success(`New Group has been created successfully`, {
        action: {
          label: 'Close',
          onClick: () => {},
        },
      });
      onOpenChange(false);
      router.refresh();
    } catch (err) {
      toast.error('Something went wrong', {
        description: 'An error occurred while creating a group.',
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
        <div className='grid gap-4 grid-cols-2'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group Name</FormLabel>
                <FormControl>
                  <Input placeholder='Group name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid gap-4'>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Description of the purpose of this group'
                    {...field}
                  />
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
