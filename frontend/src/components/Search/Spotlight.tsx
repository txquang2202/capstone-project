import { useSuspenseQuery } from '@apollo/client';
import { Avatar } from '@mantine/core';

import { GET_SPOTLIGHT_COMPANY } from '@/graphql/company';
import { Company } from '@/types/company';
import { Job } from '@/types/job';

import { IconArrowRightCircle, IconChevronRight, IconMapPin } from '../Icons';
import { StickyTag } from '../StickyTag';

const Spotlight = () => {
  const {
    data: { companySpotlight },
  } = useSuspenseQuery<
    DataResponse<'companySpotlight', Company & { job: Job[] }>
  >(GET_SPOTLIGHT_COMPANY);

  const data = companySpotlight;

  if (!data) return <></>;

  return (
    <StickyTag title='Company Spotlight'>
      <div className='flex h-[200px] rounded-lg bg-white'>
        <div className='relative flex-1'>
          <img
            alt='background'
            src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeHo1UEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f6c1362248ec8aab1cc05987b1ac3b88b4f0c0cf/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDV0FJdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e6f64d53dc2e90d2698b6c3e954a8523819e8019/image_44e3a5f6-6b25-4023-b4a1-1837fb9967f720211105_101501.jpg'
            className='h-full w-[91%] rounded-l-lg'
          />
          <div className='border-silver-grey absolute right-0 top-1/2 flex aspect-square w-[120px] -translate-y-1/2 translate-x-5 items-center justify-center rounded border bg-white'>
            <Avatar className='h-auto w-full' radius='xs'>
              {data.company_name}
            </Avatar>
          </div>
        </div>
        <div className='mx-2 flex flex-1 flex-col justify-center pl-[60px]'>
          <div className='mb-1 font-semibold'>{data.company_name}</div>
          <div className='flex items-start gap-2 text-sm'>
            <IconMapPin size={16} color='var(--dark-grey)' />
            <div>
              {data.company_location.map((location) => (
                <div key={location.id}>{location.address}</div>
              ))}
            </div>
          </div>
          <div className='py-4 text-sm'>{data.brief_overview}</div>
          <div className='text-hyperlink flex items-center'>
            View {data.job.length} jobs <IconChevronRight size={16} />
          </div>
        </div>
        <div className='border-dark-grey my-4 flex flex-1 flex-col justify-center border-l border-dashed p-4'>
          {data.job.slice(0, 3).map((job, index) => (
            <div key={index} className='flex items-center gap-2 py-1 text-sm'>
              <div className='w-4'>
                <IconArrowRightCircle color='var(--primary)' size={16} />
              </div>
              {job.name}
            </div>
          ))}
        </div>
      </div>
    </StickyTag>
  );
};

export default Spotlight;
