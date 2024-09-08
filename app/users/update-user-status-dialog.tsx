import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { activateUser } from '@/actions/users/activate';

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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {`Are you sure you wish to `}
            <strong>{statusText}</strong>
            {` this user?`}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {`Please confirm your action by clicking the "Continue" button.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='mt-4'>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              try {
                const updateUser = await activateUser(id);
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
