import Link from 'next/link';
import React from 'react';

interface SpringCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags?: string[];
  url: string;
  // readTime: string;
}

const SpringCard: React.FC<SpringCardProps> = ({
  imageUrl,
  title,
  description,
  tags,
  url,
  // readTime,
}) => {
  // Tìm vị trí của thẻ mở và đóng của thẻ <p>
  const startIndex = description.indexOf('<p>');
  const endIndex = description.indexOf('</p>');

  // Lấy ra nội dung của thẻ <p>
  const trimmedContent = description.substring(startIndex + 3, endIndex);
  return (
    <div className='rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl'>
      <img
        src={imageUrl}
        alt={title}
        className='blog-card-image ls-is-cached lazyloaded w-full transform cursor-pointer rounded-t-lg transition duration-300 ease-in-out hover:brightness-90'
      />
      <div className='flex flex-col items-stretch  px-6 pb-12 pt-6'>
        <p className='hover:text-red flex h-20 cursor-pointer items-center self-start text-xl font-medium'>
          <Link href={url}>{title}</Link>
        </p>

        <div className='mt-6 self-start'>
          <p
            className='line-clamp-5'
            dangerouslySetInnerHTML={{ __html: trimmedContent }}
          />
        </div>
        <div className='mt-8 self-start py-4'>
          {tags?.map((tag, index) => (
            <a
              key={index}
              href='#!'
              className='hover:border-red  hover:text-red py-0.5x mr-2 inline-block rounded-full border  border-gray-500 px-1.5  text-center text-[10px]'
            >
              {tag}
            </a>
          ))}
        </div>
        <div className='mt-auto flex flex-row items-center gap-1 self-end justify-self-end text-sm font-medium text-blue-700'>
          <Link href={url} className='hyperlink'>
            Bắt đầu đọc
            {/* ({readTime}) */}
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
