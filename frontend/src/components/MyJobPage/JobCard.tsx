import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/Button';
import {
  IconHeart,
  IconMapPin,
  IconRemote,
  IconSalary,
} from '@/components/Icons';
import { useLocale } from '@/locale';

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
  isApplied?: boolean;
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
  isApplied = false,
}: Props) => {
  const [liked, setLiked] = useState(isLiked);
  const { t } = useLocale();

  const handleLike = () => {
    setLiked(!liked); // Chuyển đổi trạng thái liked khi nút được nhấp
  };
  return (
    <div className='duration-30 rounded bg-white p-4 shadow-sm transition hover:shadow-xl'>
      <p className='text-medium font-semibold text-gray-400'>
        {t('Posted')} {postedAgo} {t('days ago')}
      </p>
      <p className='mt-3 h-16 text-lg font-bold'>
        <Link href={urlJob}>{title}</Link>
      </p>
      <div className='mt-3 flex flex-row flex-wrap items-center gap-2'>
        <Link href={urlCompany}>
          <img
            src={companyLogoUrl}
            alt={companyName}
            className='border-1 h-12 w-12 rounded-sm border-gray-100 shadow-lg '
          />
        </Link>
        <p>
          <Link href={urlCompany}>{companyName}</Link>
        </p>
      </div>
      <div className='mt-4 flex flex-row items-center gap-2 text-[#1cb917]'>
        <IconSalary size={24} />
        <p className=' font-semibold'>You'll love it</p>
      </div>
      <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
      <div className='mt-3 '>
        <div className='space-y-1'>
          <div className='flex flex-row items-center gap-2 text-sm'>
            <IconRemote size={16} viewBox='0 0 24 25' />
            <span>Remote</span>
          </div>
          <div className='flex flex-row items-center gap-2 text-sm'>
            <IconMapPin size={16} />
            <span>Ho Chi Minh</span>
          </div>
        </div>
      </div>
      <div className='mt-3 self-start pb-10'>
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
      <div className='mt-auto flex flex-row flex-wrap items-end justify-between'>
        <p className='text-red text-xs font-medium'>
          {t('Expires in')} {expires} {t('days')}
        </p>
        <div className='flex flex-row items-center gap-2'>
          <Button
            intent='primary'
            size='large'
            className='h-[40px] text-[16px] font-[600] hover:bg-red-700 '
            disabled={isApplied}
          >
            {isApplied ? 'Applied' : t('Apply now')}
          </Button>
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
