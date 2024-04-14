'use client';

import Link from 'next/link';

import { Company } from '@/types/company';

import { IconFacebook, IconGlobe } from '../Icons';

type Props = {
  company: Company;
};

const CompanyOverview = ({ company }: Props) => {
  return (
    <div
      className='mb-[20px] rounded-lg bg-white px-[20px] pb-[32px] pt-[24px] md:p-[24px] md:pb-[32px]'
      style={{ boxShadow: '0px 6px 32px rgba(0,0,0,.08)' }}
    >
      {/* Header */}
      <h2 className='border-bottom-dashed pb-[16px]'> Company overview </h2>

      {/* Paragraph */}
      <div className='paragraph text-break pt-[16px]'>
        {/* The NAB Innovation Centre Vietnam is owned by NAB - Australia’s largest business bank.
                <p>
                    The NAB Innovation Centre Vietnam (NAB Vietnam) is part of National Australia Bank (NAB) Technology & Enterprise Operations division. 
                    The mission of the NAB Vietnam is to connect the talents of Vietnam to NAB and together improve the lives of those in the Vietnam technology community.
                </p>
                <p>
                    As Australia’s largest business bank, NAB is focused on delivering great experiences for customers. 
                    To do this it uses modern technologies, alongside great technology talent including leading software engineers, cloud experts and quality engineers.
                </p>
                <p>
                    <strong>We’re working on interesting projects to help NAB’s 8 million customers:</strong>
                    By joining us, local software engineers will have access to a wide variety of projects and opportunities, 
                    working closely with colleagues in Australia and with global partners such as AWS and Microsoft to take advantage of the latest modern technologies.
                </p>
                <p>
                    <strong>We’re investing in you:</strong> We strive&nbsp;to create not only a great place to work, but also the best technology centre for tech engineers to thrive.
                </p>
                <p>
                    <strong>It’s more than just a career!</strong>
                </p>
                <p>
                We believe in people with ideas and dreams, and we want you to achieve your aspirations. If you have an appetite to learn, grow and elevate others around you, 
                this is the place for you!
                </p> */}
        {/* {company.overview} */}
        <div dangerouslySetInnerHTML={{ __html: company.overview }}></div>
      </div>

      {/* Icon */}
      <div className='paragraph border-top-dashed mt-[16px] flex flex-col md:flex-row'>
        <div className='flex cursor-pointer items-center pr-[16px] pt-[16px]'>
          <IconGlobe width={20} height={20} color='#0e2eed' />
          <div className='hyperlink pl-[4px]'>
            <Link href={company.company_website} passHref>
              Company website
            </Link>
          </div>
        </div>
        <div className='flex cursor-pointer items-center pr-[16px] pt-[16px]'>
          <IconFacebook width={20} height={20} color='#0e2eed' />
          <div className='hyperlink pl-[4px]'>
            <Link href={company.company_facebook}>Fanpage Facebook</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
