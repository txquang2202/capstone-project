'use client';

import CompanyBenefit from './Benefit';
import CompanyJobs from './CompanyJobs';
import CompanyGeneralInformation from './GeneralInformation';
import CompanyKeySkill from './KeySkills';
import CompanyLocation from './Location';
import CompanyNavbar from './Navbar';
import CompanyOverview from './Overview';

const CompanyBody = () => {
  return (
    <div className='bg-[#f7f7f7] px-[30px] pt-0 md:pt-[32px]'>
      <div className='mx-auto w-full max-w-[1340px]'>
        <div className='mx-0 grid grid-cols-12 md:mx-[28px]'>
          {/* Company Description */}
          <div className='col-span-12 pr-[14px] md:col-span-8'>
            <CompanyNavbar />
            <CompanyGeneralInformation />
            <CompanyOverview />
            <CompanyKeySkill />
            <CompanyBenefit />
            <CompanyLocation />
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

export default CompanyBody;
