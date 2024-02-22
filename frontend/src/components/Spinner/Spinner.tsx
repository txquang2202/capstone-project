import { cn } from '@/lib/classNames';

export type SpinnerProps = {
  loading?: boolean;
} & DefaultProps;

const Spinner = ({ loading, className, ...rest }: SpinnerProps) => {
  if (!loading) {
    return <></>;
  }

  return <span className={cn('it-spinner', className)} {...rest} />;
};

export default Spinner;
