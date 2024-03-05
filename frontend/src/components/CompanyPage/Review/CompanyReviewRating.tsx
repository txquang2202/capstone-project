'use client';

import { useState } from 'react';

import { IconChevronDown } from '@/components/Icons';

const CompanyReviewRating = () => {
  const [viewMore, setViewMore] = useState(false);

  const handleClickViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <div className='review-rating-container box-shadow-medium mb-5 select-none bg-white md:rounded-lg md:px-6 md:pt-6'>
      <h2 className='pb-4 pl-5 pt-6 md:pl-0 md:pt-0'>Overall rating</h2>

      <div className='border-top-dashed border-bottom-dashed mx-5 flex flex-col flex-wrap py-6 md:mx-0 md:flex-row  '>
        <div className='col col-md-8 px-0'></div>
        <div className='col'></div>
        <div className={`collapse p-0 ${viewMore ? 'show' : ''}`}></div>
      </div>

      <div className='flex py-4'>
        <button
          onClick={handleClickViewMore}
          className='hyperlink collapsed mx-auto inline-flex w-auto select-none items-center gap-1 border-0 bg-transparent p-0'
        >
          <span className='text-[16px] font-[400]'>See more</span>
          <div className='heading-none self-end pt-1'>
            <IconChevronDown width={16} height={16} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CompanyReviewRating;
