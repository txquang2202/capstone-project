import React, { useState } from 'react';

import { IconPlusCircle } from '@/components/Icons';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  isOpen?: boolean;
  onToggle?: () => void;
};

const Card = ({
  title,
  description,
  imageUrl,
  isOpen = false,
  onToggle,
}: Props) => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(isOpen);

  const handleToggle = () => {
    setIsCardOpen(!isCardOpen);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className='mt-6 rounded-md bg-[#ffff] shadow-md'>
      <div className='flex flex-row flex-wrap items-start justify-between p-7'>
        <div>
          <span className='text-2xl font-bold'>{title}</span>
          <p className='mt-3 text-[18px] font-semibold text-gray-400'>
            {description}
          </p>
        </div>
        <div className='flex flex-row'>
          <img alt='' src={imageUrl} className='h-20 w-20 rounded-full' />
          <span className='ml-4 cursor-pointer'>
            <button onClick={handleToggle}>
              <IconPlusCircle size={20} color='var(--primary)' />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
