'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { routes } from '@/configs/router';

import { AppLink } from '../AppLink';

const CompanyNavbar = () => {
  const currentPage = usePathname();

  useEffect(() => {
    console.log('current page:', currentPage);
  }, []);
  return (
    <div
      className='mb-[20px] rounded-lg bg-white'
      style={{ boxShadow: '0px 6px 32px rgba(0,0,0,.08)' }}
    >
      <ul className='itabs m-0 flex max-w-[100%] list-none items-center gap-[48px] overflow-auto overflow-y-hidden whitespace-nowrap p-0 text-[16px] leading-normal md:pl-[24px]'>
        <li className='py-[24px]'>
          <AppLink
            href={routes.company.path}
            className={`tab-link ${
              currentPage === routes.company.path ||
              currentPage === '/vi/companies'
                ? 'active'
                : ''
            }`}
          >
            Overview
          </AppLink>
        </li>
        <li className='py-[24px]'>
          <AppLink
            href={routes.companyReview.path}
            className={`tab-link ${
              currentPage === routes.companyReview.path ||
              currentPage === '/vi/companies/review'
                ? 'active'
                : ''
            }`}
          >
            Reviews
            <div className='badge-counter ml-[8px]'>44</div>
          </AppLink>
        </li>
      </ul>
    </div>
  );
};

export default CompanyNavbar;
