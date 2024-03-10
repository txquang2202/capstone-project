import React from 'react';

import { IconCheckCircle, IconLoader, IconUsers } from '@/components/Icons';
import { cn } from '@/lib/classNames';

interface JobAppliedItemProps {
  title: string;
  imageUrl: string;
  timePosted: string;
  description: string;
  status: string;
  onSelect: () => void;
  isSelected: boolean;
}

const JobAppliedItem: React.FC<JobAppliedItemProps> = ({
  title,
  imageUrl,
  timePosted,
  description,
  status,
  onSelect,
  isSelected,
}) => {
  const statusIcons: { [key: string]: JSX.Element } = {
    Hired: <IconCheckCircle className='h-4 w-4' />,
    Submitting: <IconLoader className='h-4 w-4' />,
    Interviewing: <IconUsers className='h-4 w-4' />,
  };

  return (
    <div
      onClick={onSelect}
      className={`border-silver-grey hover:bg-light-grey flex cursor-pointer flex-row items-center justify-between gap-2 border-b-[1px] px-6 py-3 ${
        isSelected ? 'bg-silver-grey' : ''
      }`}
    >
      <div className=' flex w-1/5 justify-center'>
        <img src={imageUrl} alt='User' className='h-14 w-14 rounded-full' />
      </div>
      <div className='flex w-4/5 flex-col'>
        <div className='flex flex-row justify-between'>
          <p className='w-48 truncate text-[16px] font-[600]'>{title}</p>
          <span className='text-grey text-[10px]'>{timePosted}</span>
        </div>
        <div>
          <p className='mt-1 line-clamp-2 text-[12px]'>{description}</p>
          <div
            className={cn(
              'mt-1 flex items-center gap-2 text-[12px] text-[600]',
              {
                'text-green': status === 'Hired',
                'text-orange': status === 'Submitting',
                'text-blue': status === 'Interviewing',
              }
            )}
          >
            {statusIcons[status]} {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAppliedItem;
