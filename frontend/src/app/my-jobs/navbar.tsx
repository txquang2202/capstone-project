import React from 'react';
import Link from 'next/link';

interface NavigationProps {
  selected: string;
}

const Navigation: React.FC<NavigationProps> = ({ selected }) => {
  return (
    <nav className='bg-[#ffff] shadow-2xl'>
      <div className='mx-auto flex max-w-7xl flex-row flex-wrap  justify-center gap-x-4 px-4 font-semibold text-gray-500 sm:justify-center sm:px-6 md:justify-center lg:justify-start lg:px-8 xl:justify-start 2xl:justify-start'>
        <div
          className={` mt-2  cursor-pointer py-3 text-center ${
            selected === 'my-jobs'
              ? 'border-b-[3px] border-red-500 text-red-500'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link href='/my-jobs' className='px-5 py-3 '>
            Saved&nbsp;Jobs
          </Link>
        </div>
        <div
          className={`mt-2  cursor-pointer py-3 text-center ${
            selected === 'recent-viewed'
              ? 'border-b-[3px] border-red-500 text-red-500'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link href='/my-jobs/recent-viewed' className='px-5 py-3'>
            Recent&nbsp;Viewed&nbsp;Jobs
          </Link>
        </div>

        <div
          className={`mt-2  cursor-pointer py-3 text-center ${
            selected === 'applied'
              ? 'border-b-[3px] border-red-500 text-red-500'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link href='/my-jobs/applied' className='px-5 py-3'>
            Applied&nbsp;Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
