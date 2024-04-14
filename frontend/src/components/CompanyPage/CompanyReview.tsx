'use client';

import { Company } from '@/types/company';

import CompanyJobs from './CompanyJobs';
import CompanyNavbar from './Navbar';
import CompanyReviewList from './Review/CompanyReviewList';
import CompanyReviewRating from './Review/CompanyReviewRating';
import CompanyWriteReview from './Review/WriteReview';

type Props = {
  company: Company;
};

const CompanyReviewBody = ({ company }: Props) => {
  return (
    <div className='bg-[#f7f7f7] px-[30px] pt-0 md:pt-[32px]'>
      <div className='mx-auto w-full max-w-[1340px]'>
        <div className='mx-0 grid grid-cols-12 md:mx-[28px]'>
          {/* Company Description */}
          <div className='col-span-12 pr-[14px] md:col-span-8'>
            <CompanyNavbar company={company} />
            <CompanyReviewRating />
            <CompanyWriteReview />
            <CompanyReviewList />
          </div>
          {/* Jobs Listing */}
          <div className='job-listing-wrapper col-span-12 pl-[14px] md:col-span-4'>
            <CompanyJobs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyReviewBody;
