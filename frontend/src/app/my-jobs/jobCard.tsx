import React, { useState } from 'react';
import Link from 'next/link';

interface JobCard {
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
}

const JobCard: React.FC<JobCard> = ({
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
}) => {
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
        <svg
          fill='none'
          height='24'
          stroke='currentColor'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
          className='text-green-500'
        >
          <path
            d='M12.0044 6V18'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          ></path>
          <path
            d='M14.9287 7.90332H10.5395C9.99625 7.90332 9.47527 8.11912 9.09114 8.50325C8.70701 8.88738 8.49121 9.40836 8.49121 9.9516C8.49121 10.4948 8.70701 11.0158 9.09114 11.4C9.47527 11.7841 9.99625 11.9999 10.5395 11.9999H13.4656C14.0088 11.9999 14.5298 12.2157 14.914 12.5998C15.2981 12.9839 15.5139 13.5049 15.5139 14.0482C15.5139 14.5914 15.2981 15.1124 14.914 15.4965C14.5298 15.8806 14.0088 16.0964 13.4656 16.0964H8.49121'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            stroke='currentColor'
          ></path>
          <circle
            cx='12.0002'
            cy='12.0002'
            r='9.3'
            strokeWidth='2'
            stroke='currentColor'
          ></circle>
        </svg>
        <p className='font-semibold text-green-500'>You'll love it</p>
      </div>
      <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
      <div className='mt-3 '>
        <ul className='space-y-1'>
          <li className='flex flex-row items-center gap-2 text-sm'>
            <svg
              fill='none'
              height='16'
              viewBox='0 0 24 25'
              width='16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_947_6633)'>
                <path
                  d='M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  stroke='currentColor'
                ></path>
                <path
                  d='M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  stroke='currentColor'
                ></path>
                <path
                  d='M11.5 18.9375H12.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  stroke='currentColor'
                ></path>
                <path
                  d='M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  stroke='currentColor'
                ></path>
                <line
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  stroke='currentColor'
                  x1='1'
                  x2='23'
                  y1='23.5'
                  y2='23.5'
                ></line>
              </g>
              <defs>
                <clipPath id='clip0_947_6633'>
                  <rect
                    fill='white'
                    height='24'
                    transform='translate(0 0.5)'
                    width='24'
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <span>Remote</span>
          </li>
          <li className='flex flex-row items-center gap-2 text-sm'>
            <svg
              width='16px'
              height='16px'
              viewBox='-4 0 32 32'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>location</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id='Page-1'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
              >
                <g
                  id='Icon-Set'
                  transform='translate(-104.000000, -411.000000)'
                  fill='#000000'
                >
                  <path
                    d='M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z'
                    id='location'
                  ></path>
                </g>
              </g>
            </svg>
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
            {liked ? (
              <svg
                width='30px'
                height='28px'
                viewBox='0 -1 32 32'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                fill='#000000'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0' />

                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />

                <g id='SVGRepo_iconCarrier'>
                  <title>heart-like</title>
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>
                  <g
                    id='Page-1'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g
                      id='Icon-Set-Filled'
                      transform='translate(-102.000000, -882.000000)'
                      fill='#e10e0e'
                    >
                      <path
                        d='M126,882 C122.667,882 119.982,883.842 117.969,886.235 C116.013,883.76 113.333,882 110,882 C105.306,882 102,886.036 102,890.438 C102,892.799 102.967,894.499 104.026,896.097 L116.459,911.003 C117.854,912.312 118.118,912.312 119.513,911.003 L131.974,896.097 C133.22,894.499 134,892.799 134,890.438 C134,886.036 130.694,882 126,882'
                        id='heart-like'
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                width='30px'
                height='30px'
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
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z'
                    stroke='#e11414'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
