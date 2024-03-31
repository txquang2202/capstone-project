'use client';

import { IconMapPin } from '@/components/Icons';
import { Company } from '@/types/company';

type Props = {
  company: Company;
};
const AdminCompanyCard = ({ company }: Props) => {
  return (
    <div className='bg-gradient-search ipt-6 ipb-8 ipy-md-8 company-info px-[30px] py-[30px] text-white'>
      <div className='icontainer'>
        <div className='grid md:grid-cols-6'>
          <div className='col-span-4'>
            <div className='flex-column flex md:flex-row'>
              {/* Logo */}
              <div className='flex justify-center'>
                <div className='logo ime-md-6 text-center'>
                  <img
                    alt='hide-the-best-it'
                    className='w-full'
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--89a7283b6fdfb4208cdc2b440a36613a6fae974c/logo.jpg'
                  />
                </div>
              </div>

              {/* Company's Info */}
              <div>
                <h1 className='text-md-start ipt-4 ipb-2 ipt-md-0 text-center'>
                  {company.company_name}
                </h1>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyCard;
