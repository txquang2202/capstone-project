import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-header-gradient sticky top-0 z-10'>
      <div className='container-xxl  px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex'>
            <div className='flex flex-shrink-0 items-center'>
              <Link href='/blog'>
                <Image
                  src='https://itviec.com/blog/wp-content/uploads/2020/12/blog_logo_retina.png'
                  alt='logo'
                  width={148}
                  height={40}
                />
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <div className='text- group  relative inline-flex items-center px-1 pt-1 font-medium text-gray-300 hover:text-white'>
                <Link href='#!'>Việc&nbsp;làm&nbsp;IT</Link>
                {/* <ul className='absolute left-[-2px] top-[38px] hidden w-[240px] divide-y divide-[#242424] rounded-sm bg-[#3e3e3e] text-start   group-hover:block'>
                  <li className=' py-2 hover:bg-gray-400'>
                    <Link href='#!'>Việc làm IT theo kỹ năng</Link>
                  </li>
                  <li className=' py-2 hover:bg-gray-400'>
                    <Link href='#!'>Việc làm IT theo cấp bặc</Link>
                  </li>
                  <li className=' py-2 hover:bg-gray-400'>
                    <Link href='#!'>Việc làm IT theo công ty</Link>
                  </li>
                  <li className=' py-2 hover:bg-gray-400'>
                    <Link href='#!'>Việc làm IT theo thành phố</Link>
                  </li>
                </ul> */}
                <div className='absolute left-[-2px] top-[38px] hidden w-[240px] divide-y divide-[#242424] rounded-sm bg-[#3e3e3e] text-start   group-hover:block'>
                  <div className=' py-2 hover:bg-gray-400'>
                    <Link href='#!' className='pl-3'>
                      Việc làm IT theo kỹ năng
                    </Link>
                  </div>
                  <div className=' py-2 hover:bg-gray-400'>
                    <Link href='#!' className='pl-3'>
                      Việc làm IT theo cấp bặc
                    </Link>
                  </div>
                  <div className=' py-2 hover:bg-gray-400'>
                    <Link href='#!' className='pl-3'>
                      Việc làm IT theo công ty
                    </Link>
                  </div>
                  <div className=' py-2 hover:bg-gray-400'>
                    <Link href='#!' className='pl-3'>
                      Việc làm IT theo thành phố
                    </Link>
                  </div>
                </div>
              </div>
              <div className='text- inline-flex items-center px-1 pt-1 font-medium text-gray-300 hover:text-white'>
                <Link href='#!'>Sự&nbsp;nghiệp&nbsp;IT</Link>
              </div>
              <div className='text- inline-flex items-center px-1 pt-1 font-medium text-gray-300 hover:text-white'>
                <Link href='#!'>
                  Ứng&nbsp;tuyển&nbsp;&&nbsp;Thăng&nbsp;tiến
                </Link>
              </div>
              <div className='text- inline-flex items-center px-1 pt-1 font-medium text-gray-300 hover:text-white'>
                <Link href='#!'>Chuyên&nbsp;môn&nbsp;IT</Link>
              </div>
              <div className='text- inline-flex items-center px-1 pt-1 font-medium text-gray-300 hover:text-white'>
                <Link href='#!'>Chuyện&nbsp;IT</Link>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
        id='mobile-menu'
      >
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Việc&nbsp;làm&nbsp;IT</Link>
          </div>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Việc làm IT theo kỹ năng</Link>
          </div>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Việc làm IT theo cấp bậc</Link>
          </div>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Việc làm IT theo công ty</Link>
          </div>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Việc làm IT theo thành phố</Link>
          </div>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Sự&nbsp;nghiệp&nbsp;IT</Link>
          </div>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Ứng&nbsp;tuyển&nbsp;&&nbsp;Thăng&nbsp;tiến</Link>
          </div>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Chuyên&nbsp;môn&nbsp;IT</Link>
          </div>
          <div className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
            <Link href='#!'>Chuyện&nbsp;IT</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
