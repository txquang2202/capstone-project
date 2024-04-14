'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { routes } from '@/configs/router';
import { Company } from '@/types/company';

import { AppLink } from '../AppLink';

type Props = {
  company: Company;
};

const CompanyNavbar = ({ company }: Props) => {
  const currentPage = usePathname();
  const isReviewPage =
    currentPage?.startsWith('/companies/') && currentPage.endsWith('/review');

  useEffect(() => {
    console.log('currentPage', currentPage);
    console.log('isCompanyPage', isReviewPage);
    console.log('company', company);
  }, [company, currentPage, isReviewPage]);

  if (!company) {
    return null; // or return some loading state
  }

  return (
    <div
      className='mb-[20px] rounded-lg bg-white'
      style={{ boxShadow: '0px 6px 32px rgba(0,0,0,.08)' }}
    >
      <ul className='itabs m-0 flex max-w-[100%] list-none items-center gap-[48px] overflow-auto overflow-y-hidden whitespace-nowrap p-0 text-[16px] leading-normal md:pl-[24px]'>
        <li className='py-[24px]'>
          <AppLink
            href={routes.company.pathParams({ slug: company.slug })}
            className={`tab-link ${isReviewPage ? '' : 'active'}`}
          >
            Overview
          </AppLink>
        </li>
        <li className='py-[24px]'>
          <AppLink
            href={routes.companyReview.pathParams({ slug: company.slug })}
            className={`tab-link ${isReviewPage ? 'active' : ''}`}
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
