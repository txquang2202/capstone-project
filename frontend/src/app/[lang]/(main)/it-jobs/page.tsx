'use client';

import { useSuspenseQuery } from '@apollo/client';
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
import { GET_JOBS } from '@/graphql/job';
import { cn } from '@/lib/classNames';
import { Job } from '@/types/job';

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

export default function Page() {
  // const { t } = useLocale();
  const [selected, setSelected] = useState(0);
  const [page, setPage] = useState(0);
  const {
    data: { jobs },
  } = useSuspenseQuery<DataResponse<'jobs', Job[]>>(GET_JOBS);
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
            {jobs.map((job, index) => (
              <JobItem
                key={job.id}
                isHot={!!(index % 2)}
                selected={selected === index}
                onSelect={() => setSelected(index)}
                unit='VND'
                {...job}
              />
            ))}
          </div>
          <div className='absolute bottom-0 right-0 top-0 w-[calc(60%-24px)]'>
            <div className='sticky top-[78px]'>
              <JobDetail job={jobs[selected]} />
            </div>
          </div>
        </div>
        <div className='mt-10 flex items-center justify-center gap-2 pb-16'>
          <Button
            size='small'
            onClick={() => setPage(page - 1)}
            className={cn(
              'border-silver-grey hover:!border-primary text-rich-grey hover:!text-primary h-9 w-9 p-0',
              {
                invisible: page === 0,
              }
            )}
            intent='subtle'
          >
            <IconChevronLeft size={16} />
          </Button>
          {[1, 2, 3, 4, 5].map((index) => (
            <Button
              key={index}
              size='small'
              onClick={() => setPage(index - 1)}
              className={cn('h-9 w-9', {
                'border-silver-grey hover:!border-primary text-rich-grey hover:!text-primary':
                  index - 1 !== page,
              })}
              intent={index - 1 === page ? 'primary' : 'subtle'}
            >
              {index}
            </Button>
          ))}
          <Button
            size='small'
            onClick={() => setPage(page + 1)}
            className={cn(
              'border-silver-grey hover:!border-primary text-rich-grey hover:!text-primary h-9 w-9 p-0',
              {
                invisible: page === 4,
              }
            )}
            intent='subtle'
          >
            <IconChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
