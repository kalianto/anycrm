import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { activateUser } from '@/actions/users/activate';
import { ActivityIcon } from 'lucide-react';

type UpdateUserStatusDialogProps = {
  id: number;
  open: boolean;
  onOpenChange: (_open: boolean) => void;
  status: string;
  statusText: string;
};

export const UpdateUserStatusDialog = ({
  id,
  open,
  onOpenChange,
  status,
  statusText,
}: UpdateUserStatusDialogProps) => {
  const router = useRouter();
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {/* <AlertDialogTrigger asChild>
        <Button variant='link' onClick={() => onOpenChange(true)}>
          <ActivityIcon className='mr-2 h-4 w-4' />
          <span>{statusText}</span>
        </Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {`Please confirm your action by clicking on "Continue" button.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              try {
                const updateUser = await activateUser(id);
                console.log(
                  '🚀🚀🚀 ~ file: columns.tsx:148 ~ updateUser:',
                  updateUser
                );
                const statusText =
                  status === 'active' ? 'deactivated' : 'activated';
                toast.success(`User status has been "${statusText}"`, {
                  action: {
                    label: 'Close',
                    onClick: () => {},
                  },
                });
                router.refresh();
              } catch (err) {
                toast.error('Something went wrong', {
                  description: 'An error occurred while updating user status.',
                  action: {
                    label: 'Close',
                    onClick: () => {},
                  },
                });
              }
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
