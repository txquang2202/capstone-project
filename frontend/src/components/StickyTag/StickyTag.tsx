import { type ReactNode } from 'react';

import { cn } from '@/lib/classNames';

import { IconFire } from '../Icons';

type Props = {
  position?: 'left' | 'right';
  type?: 'highlight' | 'hot';
  title: string;
  children: ReactNode;
  className?: string;
  tagClass?: string;
};

const StickyTag = ({
  position = 'left',
  type = 'highlight',
  title,
  children,
  className,
  tagClass,
}: Props) => {
  return (
    <div className={cn('relative', className)}>
      <div
        className={cn('absolute z-[2] pt-2', {
          'right-0': position === 'right',
          'left-0': position === 'left',
          tagClass,
        })}
      >
        <div
          className={cn(
            'bg-warning-color after:border-t-warning-color relative px-3 py-1 text-sm font-semibold text-white after:absolute after:top-full after:border-t-8',
            {
              'after:border-primary bg-primary flex items-center gap-1':
                type === 'hot',
              'rounded-r after:left-0 after:border-r-8 after:border-r-transparent':
                position === 'left',
              'rounded-l after:right-0 after:border-l-8 after:border-l-transparent':
                position === 'right',
            }
          )}
        >
          {type === 'hot' && <IconFire />}
          {title}
        </div>
      </div>
      {children}
    </div>
  );
};

export default StickyTag;
