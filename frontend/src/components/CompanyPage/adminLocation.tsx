import React from 'react';

import { Company } from '@/types/company';

import { IconMapPin } from '../Icons';

type Props = {
  company: Company;
};

const AdminCompanyLocation = ({ company }: Props) => {
  const latitudes = company.company_location.map((location) => location.lat);
  const longitudes = company.company_location.map((location) => location.long);
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7839.219566021501!2d${longitudes}!3d${latitudes}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc41537915f%3A0x4658c1848d54bfe8!2sWeWork%20E.%20Town%20Central!5e0!3m2!1sen!2sus!4v1709530307431!5m2!1sen!2sus`;

  return (
    <div
      className='mb-[20px] rounded-lg bg-white px-[20px] pb-[32px] pt-[24px] md:p-[24px] md:pb-[32px]'
      style={{ boxShadow: '0px 6px 32px rgba(0,0,0,.08)' }}
    >
      {/* Header */}
      <h2 className='border-bottom-dashed pb-[16px]'> Location </h2>

      {/* Paragraph */}
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='pr-[8px] md:w-1/3'>
          <div className='flex-column flex md:flex-row'>
            <div className='flex justify-center gap-x-[8px] pb-[8px] md:pb-0 md:pr-[24px]'>
              <div className='text-sm font-normal'>
                {/* Address */}
                {company.company_location.map((location, index) => (
                  <div key={index} className='flex items-center'>
                    {' '}
                    <span
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                    >
                      <IconMapPin width={16} height={16} />
                    </span>
                    <div
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginLeft: '4px',
                      }}
                    >
                      {location.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mb-[24px] pl-[8px] md:w-2/3'>
          <div className='aspect-w-16 aspect-h-9 overflow-hidden rounded-lg'>
            <iframe
              src={mapUrl}
              className='h-full w-full'
              style={{ border: '0' }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyLocation;
