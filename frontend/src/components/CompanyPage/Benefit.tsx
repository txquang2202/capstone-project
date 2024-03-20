'use client';

import { useState } from 'react';

import { IconChevronDown, IconChevronUp } from '../Icons';

const CompanyBenefit = () => {
  const [viewMore, setViewMore] = useState(false);

  const handleClickViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <div
      className='mb-[20px] rounded-lg bg-white px-[20px] pb-[32px] pt-[24px] md:p-[24px] md:pb-[32px]'
      style={{ boxShadow: '0px 6px 32px rgba(0,0,0,.08)' }}
    >
      {/* Header */}
      <h2 className='border-bottom-dashed pb-[16px]'>
        {' '}
        Why you'll love working here{' '}
      </h2>

      {/* Paragraph */}
      <div className={`read-more-container relative ${viewMore ? 'show' : ''}`}>
        <div className='content'>
          {/* List reason */}
          <ul className='paragraph text-break pt-[16px]'>
            <li className='list-disc py-[4px] font-[700]'>
              Very competitive remuneration package
            </li>
            <li className='list-disc py-[4px] font-[700]'>
              Build products for millions of users in Australia
            </li>
            <li className='list-disc py-[4px] font-[700]'>
              Hybrid and flexible working environment
            </li>
          </ul>

          {/* Image */}
          <div className='pb-[24px] pt-[8px]'>
            <div className='overflow-hidden'>
              <div className='grid grid-cols-3 items-center gap-1'>
                <div className='relative cursor-pointer'>
                  <img
                    className='w-full rounded-[4px]'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd1RCUEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2883ad78600e749b0d181b0c4b6afad7a1fadf73/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWhRQmFRRzRPZ2xqY205d1d3bHBBR2tBYVFJVUFXa0J1QT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--31ad030a4f0bfbe0b7ef2a3f041666e437907425/itviec-headline-2%20(1).jpg'
                  />
                </div>
                <div className='relative cursor-pointer'>
                  <img
                    className='w-full rounded-[4px]'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMzJkUEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2b2e02b0a957cdb773a390aaa3b0202ed3a29034/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWhRQmFRRzRPZ2xqY205d1d3bHBBR2tBYVFJVUFXa0J1QT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--31ad030a4f0bfbe0b7ef2a3f041666e437907425/itviec-img-1.jpg'
                  />
                </div>
                <div className='relative cursor-pointer'>
                  <img
                    className='w-full rounded-[4px]'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMzZkUEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--de6168196dc15a286d8070f6ffa870305e87404b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWhRQmFRRzRPZ2xqY205d1d3bHBBR2tBYVFJVUFXa0J1QT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--31ad030a4f0bfbe0b7ef2a3f041666e437907425/itviec-img-2.jpg'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Paragraph */}
          <div className='paragraph text-break'>
            <p>
              <strong>THE BENEFITS AND PERKS</strong>
            </p>
            <p>
              <strong>1. Generous compensation and benefit&nbsp;package</strong>
            </p>
            <ul>
              <li className='list-disc'>Attractive salary and benefits</li>
              <li className='list-disc'>
                20-day annual leave and 7-day sick leave, etc.
              </li>
              <li className='list-disc'>
                13th month salary and Annual Performance Bonus
              </li>
              <li className='list-disc'>
                Premium healthcare for yourself and family members
              </li>
              <li className='list-disc'>
                Monthly allowance for team activities
              </li>
              <li className='list-disc'>
                Premium welcome kit and frequent appreciation gifts&nbsp;
              </li>
              <li className='list-disc'>
                Extra&nbsp;benefits for long-term employees
              </li>
            </ul>
            <p>
              <strong>
                2. Exciting career and development opportunities&nbsp;
              </strong>
            </p>
            <ul>
              <li className='list-disc'>
                Large scale products with modern technologies in banking domain
              </li>
              <li className='list-disc'>
                Clear roadmap for career advancement in&nbsp;both technical and
                leadership pathways
              </li>
              <li className='list-disc'>
                Well-structured &nbsp;learning and development programs
                (technical and soft skills)&nbsp;
              </li>
              <li className='list-disc'>
                Sponsored certificates in both IT and banking/finance
              </li>
              <li className='list-disc'>Premium&nbsp;account on Udemy&nbsp;</li>
              <li className='list-disc'>
                English learning with native teachers
              </li>
              <li className='list-disc'>
                Opportunity for traveling &amp; training in Australia
              </li>
            </ul>
            <p>
              <strong>3. Professional and engaging working environment</strong>
            </p>
            <ul>
              <li className='list-disc'>
                Hybrid working model and good work-life balance&nbsp;
              </li>
              <li className='list-disc'>
                Well-equipped &amp; modern Agile office with fully stocked
                pantry
              </li>
              <li className='list-disc'>
                Special programs to improve your physical and mental health
              </li>
              <li className='list-disc'>
                Annual company trip and events&nbsp;
              </li>
              <li className='list-disc'>
                A solid talented team behind you – great people who love what
                they do
              </li>
            </ul>
            <p>
              <strong>
                If this excites you, let's have a chat over a cup of coffee!
              </strong>
            </p>
          </div>
        </div>

        {/* View more */}
        <div
          className={`read-more absolute bottom-0 w-full pt-[96px] text-center ${
            viewMore ? 'hidden' : ''
          }`}
        >
          <a
            className='hyperlink flex cursor-pointer items-center justify-center'
            onClick={handleClickViewMore}
          >
            <span className='pr-1'>View more</span>
            <IconChevronDown width={20} height={20} />
          </a>
        </div>

        {/* Show less */}
        <div className={`pt-[24px] ${viewMore ? '' : 'hidden'}`}>
          <a
            className='hyperlink flex cursor-pointer items-center justify-center'
            onClick={handleClickViewMore}
          >
            <span className='pr-1'>View less</span>
            <IconChevronUp width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyBenefit;
