import Link from 'next/link';
import React from 'react';

interface SpringCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  readTime: string;
}

const SpringCard: React.FC<SpringCardProps> = ({
  imageUrl,
  title,
  description,
  tags,
  url,
  readTime,
}) => {
  return (
    <div className='rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl'>
      <img
        src={imageUrl}
        alt={title}
        className='transform cursor-pointer rounded-t-lg bg-cover bg-center transition duration-300 ease-in-out hover:brightness-90'
      />
      <div className='flex flex-col items-stretch  px-6 pb-12 pt-6'>
        <p className='flex h-20 cursor-pointer items-center self-start text-xl font-medium hover:text-red-500'>
          <Link href={url}>{title}</Link>
        </p>
        <p className='mt-6 h-32 self-start'>{description}</p>
        <div className='mt-8  self-start py-4'>
          {tags.map((tag, index) => (
            <a
              key={index}
              href='#!'
              className='mr-2 inline-block rounded-full border border-gray-500 p-1.5 text-center  text-xs hover:border-red-500 hover:text-red-500'
            >
              {tag}
            </a>
          ))}
        </div>
        <div className='mt-auto flex flex-row items-center gap-1 self-end justify-self-end text-sm font-medium text-blue-700'>
          <Link href={url}>Bắt đầu đọc ({readTime})</Link>
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
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SpringCard;
