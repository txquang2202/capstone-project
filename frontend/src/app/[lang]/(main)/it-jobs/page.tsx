'use client';

import { Autocomplete, Select } from '@mantine/core';
import { useState } from 'react';

import { Button } from '@/components/Button';
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconFilter,
  IconSearch,
} from '@/components/Icons';
import { JobDetail, JobItem, Spotlight } from '@/components/Search';

const OPTIONS = [
  {
    value: 'all',
    label: 'Tất cả thành phố',
  },
  {
    value: 'hcm',
    label: 'Ho Chi Minh',
  },
  {
    value: 'hanoi',
    label: 'Ha Noi',
  },
  {
    value: 'danang',
    label: 'Da Nang',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const JOBS = [
  {
    title: 'Backend Developer (C# .Net)',
    image:
      'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMExhTkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c3d6987816061008255fe4b4bf962937bdc379a4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/LOGO%20ICHIBA.jpg',
    type: 1,
    locations: ['Ha Noi'],
    salaryTo: 700,
    salaryFrom: 1000,
    hideSalary: false,
    company: 'ICHIBA',
    tags: ['Java', 'C#'],
    postedAt: new Date('2024-02-26T17:38:59.363Z'),
    isHot: false,
    unit: 'USD',
    address: 'Vinh Trung Plaza, 255 - 257 Hung Vuong, Thanh Khe, Da Nang',
  },
  {
    title: 'Backend Developer (C# .Net)',
    image:
      'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMExhTkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c3d6987816061008255fe4b4bf962937bdc379a4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/LOGO%20ICHIBA.jpg',
    type: 2,
    locations: ['Ha Noi', 'Ho Chi Minh'],
    salaryTo: 700,
    salaryFrom: 1000,
    hideSalary: true,
    company: 'ICHIBA',
    tags: ['Java', 'C#'],
    postedAt: new Date('2024-02-26T17:38:59.363Z'),
    isHot: false,
    unit: 'USD',
    address: 'Vinh Trung Plaza, 255 - 257 Hung Vuong, Thanh Khe, Da Nang',
  },
  {
    title: 'Backend Developer (C# .Net)',
    image:
      'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMExhTkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c3d6987816061008255fe4b4bf962937bdc379a4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/LOGO%20ICHIBA.jpg',
    type: 0,
    locations: ['Ha Noi'],
    salaryTo: 700,
    salaryFrom: 1000,
    hideSalary: false,
    company: 'ICHIBA',
    tags: ['Java', 'C#'],
    postedAt: new Date('2024-02-26T17:38:59.363Z'),
    isHot: true,
    unit: 'USD',
    address: 'Vinh Trung Plaza, 255 - 257 Hung Vuong, Thanh Khe, Da Nang',
  },
];

export default function Page() {
  // const { t } = useLocale();
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className='bg-header-gradient px-[160px]'>
        <div className='mx-auto flex max-w-[1220px] justify-center gap-3 pb-[124px] pt-6'>
          <Select
            data={OPTIONS}
            size='lg'
            className='it-input flex-1 [&_input]:h-[56px]'
            defaultValue='hcm'
            classNames={{
              option: 'text-base py-1 px-3 hover:bg-white-red',
            }}
            rightSection={
              <IconChevronDown color='var(--dark-grey)' size={24} />
            }
          />
          <Autocomplete
            size='lg'
            className='it-input flex-[3] [&_input]:h-[56px]'
            placeholder='Nhập từ khoá theo kỹ năng, chức vụ, công ty...'
          />
          <Button size='xl' icon={<IconSearch />} className='flex-1'>
            Tìm kiếm
          </Button>
        </div>
      </div>
      <div className='bg-light-grey relative h-[100px]'>
        <div className='absolute left-0 right-0 -translate-y-1/2 px-[30px]'>
          <Spotlight />
        </div>
      </div>
      <div className='bg-light-grey px-[30px]'>
        <div className='flex items-center justify-between pt-6'>
          <div className='text-[28px] font-bold leading-10'>
            63 IT jobs in Da Nang
          </div>
          <Button
            intent='secondary'
            size='medium'
            className='w-[140px]'
            icon={<IconFilter />}
          >
            Filter
          </Button>
        </div>
        <div className='relative mt-6 flex gap-4'>
          <div className='flex w-[40%] flex-col gap-4'>
            {JOBS.map((job, index) => (
              <JobItem
                key={index}
                title={job.title}
                image={job.image}
                type={job.type}
                locations={job.locations}
                salaryTo={job.salaryTo}
                salaryFrom={job.salaryFrom}
                company={job.company}
                tags={job.tags}
                postedAt={job.postedAt}
                unit={job.unit}
                isHot={job.isHot}
                hideSalary={job.hideSalary}
                selected={selected === index}
                onSelect={() => setSelected(index)}
              />
            ))}
          </div>
          <div className='absolute bottom-0 right-0 top-0 w-[calc(60%-24px)]'>
            <div className='sticky top-[78px]'>
              <JobDetail
                title={JOBS[selected].title}
                image={JOBS[selected].image}
                type={JOBS[selected].type}
                locations={JOBS[selected].locations}
                salaryTo={JOBS[selected].salaryTo}
                salaryFrom={JOBS[selected].salaryFrom}
                company={JOBS[selected].company}
                tags={JOBS[selected].tags}
                postedAt={JOBS[selected].postedAt}
                unit={JOBS[selected].unit}
                address={JOBS[selected].address}
              />
            </div>
          </div>
        </div>
        <div className='mt-10 flex items-center justify-center gap-2 pb-16'>
          <Button size='small' className='h-9 w-9 p-0' intent='secondary'>
            <IconChevronLeft size={16} />
          </Button>
          <Button size='small' className='h-9 w-9' intent='secondary'>
            1
          </Button>
          <Button size='small' className='h-9 w-9' intent='secondary'>
            2
          </Button>
          <Button size='small' className='h-9 w-9' intent='secondary'>
            3
          </Button>
          <Button size='small' className='h-9 w-9' intent='secondary'>
            4
          </Button>
          <Button size='small' className='h-9 w-9 p-0' intent='secondary'>
            <IconChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
