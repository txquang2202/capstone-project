'use client';

import { Button } from '@/components/Button';

const CompanyWriteReview = () => {
  return (
    <div className='box-shadow-medium mb-5 flex flex-col items-center justify-between gap-4 rounded-lg bg-[#fff] px-5 py-6 md:flex-row md:px-6 md:py-4'>
      <p>Let your voice be heard</p>

      <Button intent='primary' size='large' className='min-w-[180px]'>
        Write review
      </Button>
    </div>
  );
};

export default CompanyWriteReview;
