import Link from 'next/link';
import { useState } from 'react';

import {
  IconHeart,
  IconMapPin,
  IconRemote,
  IconSalary,
} from '@/components/Icons';

type Props = {
  postedAgo: number;
  title: string;
  urlJob: string;
  companyName: string;
  companyLogoUrl: string;
  urlCompany: string;

  //   description: string[];
  tags: string[];
  expires: number;
  isLiked: boolean;
};

const JobCard = ({
  postedAgo,
  title,
  urlJob,
  companyName,
  companyLogoUrl,
  urlCompany,
  //   description,
  tags,
  expires,
  isLiked,
}: Props) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLike = () => {
    setLiked(!liked); // Chuyển đổi trạng thái liked khi nút được nhấp
  };
  return (
    <div className='duration-30 rounded bg-white p-4 shadow-sm transition hover:shadow-xl'>
      <p className='text-medium font-semibold text-gray-400'>
        Posted {postedAgo} days ago
      </p>
      <p className='mt-3 h-16 text-lg font-bold'>
        <Link href={urlJob}>{title}</Link>
      </p>
      <div className='mt-3 flex flex-row flex-wrap items-center gap-2'>
        <Link href={urlCompany}>
          <img
            src={companyLogoUrl}
            alt={companyName}
            className='h-12 w-12 border'
          />
        </Link>
        <p>
          <Link href={urlCompany}>{companyName}</Link>
        </p>
      </div>
      <div className='mt-4 flex flex-row items-center gap-2'>
        <IconSalary size={24} />
        <p className='font-semibold text-green-500'>You'll love it</p>
      </div>
      <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
      <div className='mt-3 '>
        <ul className='space-y-1'>
          <li className='flex flex-row items-center gap-2 text-sm'>
            <IconRemote size={16} viewBox='0 0 24 25' />
            <span>Remote</span>
          </li>
          <li className='flex flex-row items-center gap-2 text-sm'>
            <IconMapPin size={16} />
            <span>Ho Chi Minh</span>
          </li>
        </ul>
      </div>
      <div className='mt-3 self-start pb-4'>
        {tags.map((tag, index) => (
          <a
            key={index}
            href='#!'
            className='mr-2 inline-block rounded-full border border-gray-300 p-1.5 text-center  text-xs hover:border-gray-800 hover:text-gray-800'
          >
            {tag}
          </a>
        ))}
      </div>
      <div className=' mt-auto flex flex-row flex-wrap items-end justify-between'>
        <p className='text-xs font-medium text-red-500'>
          Expires in {expires} days
        </p>
        <div className='flex flex-row items-center gap-2'>
          <button className='rounded-md bg-red-600 px-6 py-2 text-center text-base font-semibold text-white hover:bg-red-700'>
            Apply now
          </button>
          <button onClick={handleLike}>
            <IconHeart
              color='var(--primary)'
              fill={liked ? 'var(--primary)' : 'none'}
              size={32}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
