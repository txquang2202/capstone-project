import React from 'react';
import { useState } from 'react';

interface DetailInformationProps {
  title: string;
  description: string;
  imageUrl: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Card: React.FC<DetailInformationProps> = ({
  title,
  description,
  imageUrl,
  isOpen = false,
  onToggle,
}) => {
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
          <p className='mt-3 text-xl font-semibold text-gray-400'>
            {description}
          </p>
        </div>
        <div className='flex flex-row'>
          <img src={imageUrl} className='h-20 w-20 rounded-full' />
          <span className='ml-4 cursor-pointer'>
            <button onClick={handleToggle}>
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0' />

                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />

                <g id='SVGRepo_iconCarrier'>
                  <circle
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='#ed1b2f'
                    stroke-width='2'
                  />
                  <path
                    d='M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15'
                    stroke='#ed1b2f'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </g>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
