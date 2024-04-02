'use client';

import { Company } from '@/types/company';

import { IconFacebook, IconGlobe } from '../Icons';

type Props = {
  company: Company;
};
const AdminCompanyOverview = ({ company }: Props) => {
  return (
    <div
      className='mb-[20px] rounded-lg bg-white px-[20px] pb-[32px] pt-[24px] md:p-[24px] md:pb-[32px]'
      style={{ boxShadow: '0px 6px 32px rgba(0,0,0,.08)' }}
    >
      {/* Header */}
      <h2 className='border-bottom-dashed pb-[16px]'> Company overview </h2>

      {/* Paragraph */}
      <div
        className='paragraph text-break list-disc pt-[16px]'
        dangerouslySetInnerHTML={{
          __html: company.overview,
        }}
      ></div>

      {/* Icon */}
      <div className='paragraph border-top-dashed mt-[16px] flex flex-col md:flex-row'>
        <div className='flex cursor-pointer items-center pr-[16px] pt-[16px]'>
          <IconGlobe width={20} height={20} color='#0e2eed' />
          <div className='hyperlink pl-[4px]'>{company.company_website}</div>
        </div>
        <div className='flex cursor-pointer items-center pr-[16px] pt-[16px]'>
          <IconFacebook width={20} height={20} color='#0e2eed' />
          <div className='hyperlink pl-[4px]'>{company.company_facebook}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyOverview;
