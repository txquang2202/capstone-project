'use client';

import { useEffect, useState } from 'react';

import { IconChevronDown, IconStar } from '@/components/Icons';

const CompanyReviewRating = () => {
  const [viewMore, setViewMore] = useState(false);
  const [rate] = useState(4.6);
  const [widthRate, setWidthRate] = useState(0);

  useEffect(() => {
    const roundedRate = Math.round((rate * 100) / 5);
    setWidthRate(roundedRate);
  }, [rate]);

  const handleClickViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <div className='review-rating-container box-shadow-medium mb-5 select-none bg-white md:rounded-lg md:px-6 md:pt-6'>
      <h2 className='pb-4 pl-5 pt-6 md:pl-0 md:pt-0'>Overall rating</h2>

      <div className='border-top-dashed border-bottom-dashed mx-5 flex flex-col flex-wrap py-6 md:mx-0 md:flex-row  '>
        <div className='col col-md-8 px-0 md:px-0'>
          <div className='flex'>
            {/* Box stars */}
            <div className='flex grow items-center md:justify-center'>
              <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='text-[36px] font-[700] leading-none'>4.6</h3>

                {/* Rating star */}
                <div className='box-star-icons box-icon-lg relative text-[#dedede]'>
                  <div className='star-icons absolute'>
                    <IconStar width={24} height={24} />
                    <IconStar width={24} height={24} />
                    <IconStar width={24} height={24} />
                    <IconStar width={24} height={24} />
                    <IconStar width={24} height={24} />
                  </div>

                  <div
                    className='absolute inline-flex overflow-hidden'
                    style={{ width: `${widthRate}%` }}
                  >
                    <div className='star-icons text-[#FF9019]'>
                      <IconStar
                        width={24}
                        height={24}
                        className='fill-current'
                      />
                      <IconStar
                        width={24}
                        height={24}
                        className='fill-current'
                      />
                      <IconStar
                        width={24}
                        height={24}
                        className='fill-current'
                      />
                      <IconStar
                        width={24}
                        height={24}
                        className='fill-current'
                      />
                      <IconStar
                        width={24}
                        height={24}
                        className='fill-current'
                      />
                    </div>
                  </div>
                </div>

                {/* Number of reviews */}
                <span>44 reviews</span>
              </div>
            </div>

            {/* Progress Bar Line */}
            <div className='flex flex-col'>
              {/* 5 Stars */}
              <div className='mt-1 inline-flex items-center gap-3'>
                <div className='flex items-center'>
                  <p>5</p>
                  <div className='text-[#FF9019]'>
                    <IconStar width={16} height={16} className='fill-current' />
                  </div>
                </div>

                <div className='progress-line-bar rounded bg-[#fff4e9]'>
                  <div
                    className='h-full rounded bg-[#ff9119]'
                    style={{ width: '66%' }}
                  ></div>
                </div>

                <div>66%</div>
              </div>

              {/* 4 Stars */}
              <div className='mt-1 inline-flex items-center gap-3'>
                <div className='flex items-center'>
                  <p>4</p>
                  <div className='text-[#FF9019]'>
                    <IconStar width={16} height={16} className='fill-current' />
                  </div>
                </div>

                <div className='progress-line-bar rounded bg-[#fff4e9]'>
                  <div
                    className='h-full rounded bg-[#ff9119]'
                    style={{ width: '32%' }}
                  ></div>
                </div>

                <div>32%</div>
              </div>

              {/* 3 Stars */}
              <div className='mt-1 inline-flex items-center gap-3'>
                <div className='flex items-center'>
                  <p>3</p>
                  <div className='text-[#FF9019]'>
                    <IconStar width={16} height={16} className='fill-current' />
                  </div>
                </div>

                <div className='progress-line-bar rounded bg-[#fff4e9]'>
                  <div
                    className='h-full rounded bg-[#ff9119]'
                    style={{ width: '0%' }}
                  ></div>
                </div>

                <div>0%</div>
              </div>

              {/* 2 Stars */}
              <div className='mt-1 inline-flex items-center gap-3'>
                <div className='flex items-center'>
                  <p>2</p>
                  <div className='text-[#FF9019]'>
                    <IconStar width={16} height={16} className='fill-current' />
                  </div>
                </div>

                <div className='progress-line-bar rounded bg-[#fff4e9]'>
                  <div
                    className='h-full rounded bg-[#ff9119]'
                    style={{ width: '2%' }}
                  ></div>
                </div>

                <div>2%</div>
              </div>

              {/* 1 Stars */}
              <div className='mt-1 inline-flex items-center gap-3'>
                <div className='flex items-center'>
                  <p>1</p>
                  <div className='text-[#FF9019]'>
                    <IconStar width={16} height={16} className='fill-current' />
                  </div>
                </div>

                <div className='progress-line-bar rounded bg-[#fff4e9]'>
                  <div
                    className='h-full rounded bg-[#ff9119]'
                    style={{ width: '0%' }}
                  ></div>
                </div>

                <div>0%</div>
              </div>
            </div>

            <div className='vr mx-6 hidden text-[#dedede]'></div>
          </div>
        </div>

        <div className='col col-md-4'></div>

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
