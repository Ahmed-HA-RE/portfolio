import { cn } from '@/lib/utils';
import { PiSpinnerBold } from 'react-icons/pi';
function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <PiSpinnerBold
      role='status'
      aria-label='Loading'
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  );
}

export { Spinner };
