import Link from 'next/link';
import React from 'react';

interface DetailInformationProps {
  title: string;
  description: string;
  url: string;
}

const Card: React.FC<DetailInformationProps> = ({
  title,
  description,
  url,
}) => {
  return (
    <div className='mt-4 rounded-md bg-[#ffff] shadow-md hover:shadow-xl'>
      <div className='group flex h-[340px] max-w-full flex-row flex-wrap items-start justify-between overflow-hidden px-8  pb-12 pt-12 transition duration-500 ease-in-out hover:scale-105 hover:py-10'>
        <div>
          <span className='text-2xl font-semibold'>{title}</span>
          <p className='mt-4 text-base text-gray-400'>{description}</p>
          <div className='mt-4 hidden cursor-pointer group-hover:block'>
            <div className='flex flex-row items-center justify-end gap-1'>
              <Link href={url} className='text-blue-700'>
                Xem danh sách bài viết
              </Link>
              <svg
                width='16px'
                height='16px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 12H18M18 12L13 7M18 12L13 17'
                  stroke='#0000FF'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
