'use client';

import { Company } from '@/types/company';

type Props = {
  company: Company;
};

const CompanyGeneralInformation = ({ company }: Props) => {
  return (
    <div
      className='mb-[20px] rounded-lg bg-white px-[20px] pb-[32px] pt-[24px] md:p-[24px] md:pb-[32px]'
      style={{ boxShadow: '0px 6px 32px rgba(0,0,0,.08)' }}
    >
      <h2 className='border-b-[1px] border-dashed border-[#dedede] pb-[16px]'>
        {' '}
        General information{' '}
      </h2>
      <div className='mx-0 flex flex-wrap md:pt-[16px]'>
        {/* Company Type */}
        <div className='flex w-full flex-auto justify-between py-[8px] md:w-4/12 md:flex-col md:py-[0px]'>
          <div className='text-[#a6a6a6] md:text-[14px]'>Company type</div>
          <div className='weight-[400] text-[16px]'>{company.company_type}</div>
        </div>

        {/* Company Size */}
        <div className='flex w-full flex-auto justify-between py-[8px] md:w-4/12 md:flex-col md:py-[0px]'>
          <div className='text-[#a6a6a6] md:text-[14px]'>Company size</div>
          <div className='weight-[400] text-[16px]'>
            {company.company_size} employees
          </div>
        </div>

        {/* Country */}
        <div className='flex w-full flex-auto justify-between py-[8px] md:w-4/12 md:flex-col md:py-[0px]'>
          <div className='text-[#a6a6a6] md:text-[14px]'>Country</div>
          <div className='weight-[400] text-[16px]'>{company.country}</div>
        </div>
      </div>
      <div className='mx-0 flex flex-wrap md:pt-[16px]'>
        {/* Working days */}
        <div className='flex w-full justify-between py-[8px] md:w-4/12 md:flex-col md:py-[0px]'>
          <div className='text-[#a6a6a6] md:text-[14px]'>Working days</div>
          <div className='weight-[400] text-[16px]'>{company.working_day}</div>
        </div>

        {/* Overtime policy */}
        <div className='flex w-full justify-between py-[8px] md:w-4/12 md:flex-col md:py-[0px]'>
          <div className='text-[#a6a6a6] md:text-[14px]'>Overtime policy</div>
          <div className='weight-[400] text-[16px]'>{company.ot_policy}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyGeneralInformation;
