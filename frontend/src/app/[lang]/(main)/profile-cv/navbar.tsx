import Link from 'next/link';
import React from 'react';

type Props = {
  selected: string;
};

const Navigation = ({ selected }: Props) => {
  return (
    <nav className='bg-[#ffff] shadow-2xl'>
      <div className='mx-auto flex max-w-[1480px] flex-row flex-wrap justify-center gap-x-4 font-semibold text-gray-500 sm:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start'>
        <div
          className={`mt-2 w-[160px] cursor-pointer py-3 text-center ${
            selected === 'profile'
              ? 'border-b-[3px] border-red-500 text-red-500'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link href='/profile-cv' className='px-15 py-3'>
            Profile
          </Link>
        </div>
        <div
          className={`mt-2 w-[160px] cursor-pointer py-3 text-center ${
            selected === 'manage-cv'
              ? 'border-b-[3px] border-red-500 text-red-500'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link href='/profile-cv/manage-cv' className='px-15 py-3'>
            Manage&nbsp;CVs
          </Link>
        </div>
        <div
          className={`hover:border-gray-250 mt-2 w-[160px] cursor-pointer px-6 py-3 
              text-center`}
        >
          Job&nbsp;Preferences
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
