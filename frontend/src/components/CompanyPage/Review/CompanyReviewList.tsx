'use client';

import { useEffect, useState } from 'react';

import {
  IconChevronDown,
  IconStar,
  IconThumbsDown,
  IconThumbsUp,
} from '@/components/Icons';

const CompanyReviewList = () => {
  const [filter, setFilter] = useState(false);
  const [rate] = useState(4.0);
  const [widthRate, setWidthRate] = useState(0);

  useEffect(() => {
    const roundedRate = Math.round((rate * 100) / 5);
    setWidthRate(roundedRate);
  }, [rate]);

  const handleFilterClick = () => {
    setFilter(!filter);
  };

  return (
    <div className='box-shadow-medium reviews-list-container mb-5 select-none bg-white px-5 pb-8 pt-6 md:rounded-lg md:p-6 md:pb-8'>
      {/* Heading */}
      <div className='border-bottom-dashed flex items-center justify-between pb-4'>
        <h2 className=''>
          {filter ? '40 reviews filtered' : '44 employee reviews'}
        </h2>
        <div className='flex items-center justify-center'>
          <span className='mr-2'>Filter by</span>
          <button
            onClick={handleFilterClick}
            className={`itag itag-md itag-light ${filter ? 'selected' : ''}`}
          >
            <span className={`filtered-mark ${filter ? '' : 'hidden'}`}>x</span>
            <span>OT</span>
          </button>
        </div>
      </div>

      {/* Review List */}
      <div className='border-bottom-dashed py-4'>
        <div className='pb-4'>
          {/* Date */}
          <span className='text-[14px] text-[#a7a6a6]'>February 2024</span>

          {/* Summary */}
          <h3>Flexible working environment. Good salary.</h3>

          {/* Rating */}
          <div className='inline-flex items-center'>
            <div className='box-star-icons box-icon-sm relative text-[#dedede]'>
              <div className='star-icons absolute'>
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
              </div>

              <div
                className='absolute inline-flex overflow-hidden'
                style={{ width: `${widthRate}%` }}
              >
                <div className='star-icons text-[#FF9019]'>
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                </div>
              </div>
            </div>

            <p className='ml-2 px-1'>{rate}</p>

            <span className='relative'>
              <IconChevronDown width={16} height={16} />
            </span>

            {/* Detail rating drop list */}
            <ul className='hidden'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>

            {rate > 3 ? (
              <div className='recommend-icon-wrapper inline-flex items-center gap-2'>
                <IconThumbsUp width={16} height={16} />
                Recommend
              </div>
            ) : (
              <div className='no-recommend-icon-wrapper inline-flex items-center gap-2'>
                <IconThumbsDown width={16} height={16} />
                Doesn't recommend
              </div>
            )}
          </div>
        </div>

        {/* What I liked Section */}
        <div className='pb-2'>
          <h4>What I liked:</h4>
          <p>
            - Creative and energetic working environment
            <br />
            - Friendly and talented mates to push your self-development
            <br />
            - Competitive benefits to the market
            <br />
            Support employees with reasonable OT payments and pay on time
          </p>
        </div>

        {/* Suggestion for improvement Section */}
        <div>
          <h4>Suggestion for improvement:</h4>
          <p>
            - Expand the working area, especially meeting rooms
            <br />- Enhance work-life balance as some teams may be overload
          </p>
        </div>
      </div>
      {/* Review List */}
      <div className='border-bottom-dashed py-4'>
        <div className='pb-4'>
          {/* Date */}
          <span className='text-[14px] text-[#a7a6a6]'>February 2024</span>

          {/* Summary */}
          <h3>Flexible working environment. Good salary.</h3>

          {/* Rating */}
          <div className='inline-flex items-center'>
            <div className='box-star-icons box-icon-sm relative text-[#dedede]'>
              <div className='star-icons absolute'>
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
              </div>

              <div
                className='absolute inline-flex overflow-hidden'
                style={{ width: `${widthRate}%` }}
              >
                <div className='star-icons text-[#FF9019]'>
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                </div>
              </div>
            </div>

            <p className='ml-2 px-1'>{rate}</p>

            <span className='relative'>
              <IconChevronDown width={16} height={16} />
            </span>

            {/* Detail rating drop list */}
            <ul className='hidden'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>

            {rate > 3 ? (
              <div className='recommend-icon-wrapper inline-flex items-center gap-2'>
                <IconThumbsUp width={16} height={16} />
                Recommend
              </div>
            ) : (
              <div className='no-recommend-icon-wrapper inline-flex items-center gap-2'>
                <IconThumbsDown width={16} height={16} />
                Doesn't recommend
              </div>
            )}
          </div>
        </div>

        {/* What I liked Section */}
        <div className='pb-2'>
          <h4>What I liked:</h4>
          <p>
            - Creative and energetic working environment
            <br />
            - Friendly and talented mates to push your self-development
            <br />
            - Competitive benefits to the market
            <br />
            Support employees with reasonable OT payments and pay on time
          </p>
        </div>

        {/* Suggestion for improvement Section */}
        <div>
          <h4>Suggestion for improvement:</h4>
          <p>
            - Expand the working area, especially meeting rooms
            <br />- Enhance work-life balance as some teams may be overload
          </p>
        </div>
      </div>
      {/* Review List */}
      <div className='border-bottom-dashed py-4'>
        <div className='pb-4'>
          {/* Date */}
          <span className='text-[14px] text-[#a7a6a6]'>February 2024</span>

          {/* Summary */}
          <h3>Flexible working environment. Good salary.</h3>

          {/* Rating */}
          <div className='inline-flex items-center'>
            <div className='box-star-icons box-icon-sm relative text-[#dedede]'>
              <div className='star-icons absolute'>
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
                <IconStar width={16} height={16} />
              </div>

              <div
                className='absolute inline-flex overflow-hidden'
                style={{ width: `${widthRate}%` }}
              >
                <div className='star-icons text-[#FF9019]'>
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                  <IconStar width={16} height={16} className='fill-current' />
                </div>
              </div>
            </div>

            <p className='ml-2 px-1'>{rate}</p>

            <span className='relative'>
              <IconChevronDown width={16} height={16} />
            </span>

            {/* Detail rating drop list */}
            <ul className='hidden'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>

            {rate > 3 ? (
              <div className='recommend-icon-wrapper inline-flex items-center gap-2'>
                <IconThumbsUp width={16} height={16} />
                Recommend
              </div>
            ) : (
              <div className='no-recommend-icon-wrapper inline-flex items-center gap-2'>
                <IconThumbsDown width={16} height={16} />
                Doesn't recommend
              </div>
            )}
          </div>
        </div>

        {/* What I liked Section */}
        <div className='pb-2'>
          <h4>What I liked:</h4>
          <p>
            - Creative and energetic working environment
            <br />
            - Friendly and talented mates to push your self-development
            <br />
            - Competitive benefits to the market
            <br />
            Support employees with reasonable OT payments and pay on time
          </p>
        </div>

        {/* Suggestion for improvement Section */}
        <div>
          <h4>Suggestion for improvement:</h4>
          <p>
            - Expand the working area, especially meeting rooms
            <br />- Enhance work-life balance as some teams may be overload
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyReviewList;
