'use client';

import Image from 'next/image';

export default function Page() {
  return (
    <div className='mx-20 mb-[100px] py-2.5'>
      <div className='my-[42px] flex items-center gap-2 text-xl text-[#4e4e4e]'>
        Welcome to the
        <Image alt='logo' src='/images/logo-black.png' width={80} height={30} />
        Employer Site
      </div>
    </div>
  );
}
