import Image from 'next/image';
import React, { useState } from 'react';

import {
  IconChevronDown,
  IconChevronUp,
  IconPlusCircle,
} from '@/components/Icons';

interface RatingCardProps {
  percent: number;
}

const RatingCard: React.FC<RatingCardProps> = ({ percent }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className='w-[300px]  rounded-md bg-[#ffff] shadow-md sm:static md:static  lg:static xl:sticky xl:top-2 2xl:sticky 2xl:top-2'>
      <div className=' p-5'>
        {/* start percent */}
        <div className='border-gray-250 flex flex-row items-start justify-center gap-5 border-b-[1px] p-2'>
          {/* start */}
          <div className='relative h-[84px] w-[84px]'>
            <svg
              className='h-full w-full'
              width='36'
              height='36'
              viewBox='0 0 36 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                className='stroke-current text-slate-50'
                strokeWidth='2'
              ></circle>

              <g className='origin-center -rotate-90 transform'>
                <circle
                  cx='18'
                  cy='18'
                  r='16'
                  fill='none'
                  className='text-yellow  stroke-current'
                  strokeWidth='3'
                  stroke-dasharray='100'
                  stroke-dashoffset={100 - percent}
                ></circle>
              </g>
            </svg>
            <div className='absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
              <div className='border-silver-grey rounded-full border-4 text-center'>
                <div className='p-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#eb9818'
                    viewBox='0 0 24 24'
                    width='38px'
                    height='38px'
                  >
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* percent */}
          <div className='flex flex-col'>
            <span className='font-semibold'>Profile&nbsp;Strength</span>
            <span className='text-yellow text-lg font-bold'>
              {percent >= 100
                ? 'Superstar'
                : percent >= 75
                ? 'Excellent'
                : percent >= 40
                ? 'Good'
                : percent >= 30
                ? 'Poor'
                : 'Poor'}
            </span>
            {/* Poor, Good, Excellent, Superstar Yay! Your profile is completed! */}
            <span>{percent}%&nbsp;completed</span>
          </div>
        </div>
        {/* skills */}
        <div className='border-gray-250 border-b-[1px] text-center'>
          <div className='pb-4 pt-4 text-start'>
            <span className='font-semibold'>
              Upgrade profile to "Excellent" to unlock Download CV
            </span>

            {/* add item */}
            <div className='flex flex-col justify-center'>
              {/* item 1 */}
              <div className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'>
                <IconPlusCircle className='h-5 w-5' />
                <span>Add About me</span>
              </div>
              {/* item 2 */}
              <div className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'>
                <IconPlusCircle className='h-5 w-5' />
                <span>Add Work Experience</span>
              </div>
              {/* item 3 */}
              <div className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'>
                <IconPlusCircle className='h-5 w-5' />
                <span>Add Education</span>
              </div>
              {showAll ? (
                <>
                  {/* item 4 */}
                  <div className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'>
                    <IconPlusCircle className='h-5 w-5' />
                    <span>Add Skills</span>
                  </div>
                  {/* item 5 */}
                  <div className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'>
                    <IconPlusCircle className='h-5 w-5' />
                    <span>Add Certificates</span>
                  </div>
                  {/* item 6 */}
                  <div className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'>
                    <IconPlusCircle className='h-5 w-5' />
                    <span>Add Awards</span>
                  </div>
                  {/* item 7 */}
                  <div className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'>
                    <IconPlusCircle className='h-5 w-5' />
                    <span>Add Personal Project</span>
                  </div>
                  <div
                    className='text-rich-grey mt-4 flex  cursor-pointer items-center gap-2 '
                    onClick={toggleShowAll}
                  >
                    <IconChevronUp className='h-5 w-5' />
                    <span>Show less</span>
                  </div>
                </>
              ) : (
                <div
                  className='text-rich-grey mt-4 flex  cursor-pointer items-center gap-2 '
                  onClick={toggleShowAll}
                >
                  <IconChevronDown className='h-5 w-5' />
                  <span>Add more information</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* cv */}
        <div className='pb-4 pt-4 text-center'>
          <div className='flex items-center gap-2'>
            <Image
              alt=''
              width={100}
              height={0}
              src='https://itviec.com/assets/profile/cv-d4db00ef4c885c25e437715236babd64c7cbb960ddf4771e69e55dd8169dd5ba.svg'
            />
            <span className='text-start'>
              Explore CV templates and download your CV
            </span>
          </div>

          <a
            href='#!'
            className='mt-4 inline-block w-full rounded-md  bg-[#ea1e30] px-4 py-3 font-semibold text-white shadow-md hover:bg-red-700  focus:outline-none'
          >
            Preview & Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
