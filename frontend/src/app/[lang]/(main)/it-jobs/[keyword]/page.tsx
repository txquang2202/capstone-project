'use client';

import { useSuspenseQuery } from '@apollo/client';
import { Autocomplete, Select } from '@mantine/core';
import { range, useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/Button';
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconFilter,
  IconSearch,
} from '@/components/Icons';
import {
  FilterModal,
  JobDetail,
  JobItem,
  Spotlight,
} from '@/components/Search';
import { Filter } from '@/components/Search/FilterModal';
import { routes } from '@/configs/router';
import {
  COMPANY_TYPES,
  LEVELS,
  SEARCH_OPTIONS,
  WORKING_TYPES,
} from '@/constant/global';
import { SEARCH_JOBS } from '@/graphql/job';
import { cn } from '@/lib/classNames';

const PAGE_ITEM = 20;

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const queries = useSearchParams();
  const [opened, { open, close }] = useDisclosure();
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(0);
  const [location, setLocation] = useState(
    (params?.keyword as string)?.replaceAll('%20', ' ')
  );
  const [search, setSearch] = useState(queries?.get('search') || '');
  const [filter, setFilter] = useState<Filter>({});

  const calcQuery = useCallback(
    (filter: Filter) => {
      const levels =
        filter.level?.map(
          (value) => LEVELS.find((item) => item.id === value)?.text
        ) || [];

      return {
        query: [search, ...levels].join(', '),
        address: params?.keyword as string,
        unit: filter.unit,
        salaryTo: filter.salaryTo,
        salaryFrom: filter.salaryFrom,
        companyType: filter.companyType?.map(
          (value) =>
            COMPANY_TYPES.find((item) => item.id === value)?.text as string
        ),
        workingType: filter.workingType?.map(
          (value) =>
            WORKING_TYPES.find((item) => item.id === value)?.text as string
        ),
      };
    },
    [search, params]
  );

  const [variables, setVariables] = useState(calcQuery(filter));
  useEffect(() => {
    setSelected(0);
    setSearch(queries?.get('search') || '');
    setVariables(calcQuery(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, queries]);

  const { data } = useSuspenseQuery(SEARCH_JOBS, {
    variables: {
      ...variables,
      skip: PAGE_ITEM * (page - 1),
      take: PAGE_ITEM,
    },
  });

  const jobs = data?.searchJob.jobs || [];
  const total = data?.searchJob.total || 0;
  const totalPage = Math.ceil(total / PAGE_ITEM);

  const handleSearch = () => {
    setSelected(0);
    setFilter({});
    setVariables(calcQuery({}));
    router.replace(
      routes.search.pathParams({ keyword: location }) + `?search=${search}`
    );
  };

  const handleChange = (value: Filter) => {
    setSelected(0);
    setFilter(value);
    setVariables(calcQuery(value));
  };

  return (
    <div>
      <div className='bg-header-gradient px-[160px]'>
        <div className='mx-auto flex max-w-[1220px] justify-center gap-3 pb-[124px] pt-6'>
          <Select
            data={SEARCH_OPTIONS}
            size='lg'
            value={location}
            onChange={(value) => setLocation(value as string)}
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
            value={search}
            onChange={setSearch}
          />
          <Button
            size='xl'
            icon={<IconSearch />}
            className='flex-1'
            onClick={handleSearch}
          >
            Tìm kiếm
          </Button>
        </div>
      </div>
      <div className='bg-light-grey relative h-[100px]'>
        <div className='absolute left-0 right-0 -translate-y-1/2 px-[30px]'>
          <Spotlight />
        </div>
      </div>
      {jobs.length ? (
        <div className='bg-light-grey px-[30px]'>
          <div className='flex items-center justify-between pt-6'>
            <div className='text-[28px] font-bold leading-10'>
              {total} IT jobs in{' '}
              {
                SEARCH_OPTIONS.find((opt) => opt.value === params?.keyword)
                  ?.label
              }
            </div>
            <Button
              onClick={open}
              intent='secondary'
              size='medium'
              className='w-[140px]'
              icon={<IconFilter />}
            >
              Filter
            </Button>
          </div>
          <div className='relative mt-6 flex min-h-[500px] gap-4'>
            <div className='flex min-h-screen w-[40%] flex-col gap-4'>
              {jobs?.map((job, index) => (
                <JobItem
                  key={job.id}
                  isHot={job.is_hot}
                  selected={selected === index}
                  onSelect={() => setSelected(index)}
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
                  invisible: page === 1,
                }
              )}
              intent='subtle'
            >
              <IconChevronLeft size={16} />
            </Button>
            {range(1, totalPage).map((index) => (
              <Button
                key={index}
                size='small'
                onClick={() => setPage(index)}
                className={cn('h-9 w-9', {
                  'border-silver-grey hover:!border-primary text-rich-grey hover:!text-primary':
                    index !== page,
                })}
                intent={index === page ? 'primary' : 'subtle'}
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
                  invisible: page === totalPage,
                }
              )}
              intent='subtle'
            >
              <IconChevronRight size={16} />
            </Button>
          </div>
        </div>
      ) : (
        <div className='bg-light-grey px-[30px] pb-20 pt-[60px]'>
          <div className='flex flex-col items-center bg-white py-10'>
            <Image
              alt='not found'
              src='/images/notfound.svg'
              width={160}
              height={160}
            />
            <div className='mt-5 text-[22px] font-bold'>
              Oops! The job you're looking for doesn't exist.
            </div>
          </div>
        </div>
      )}
      {opened && (
        <FilterModal
          filter={filter}
          opened={opened}
          onChange={handleChange}
          onClose={close}
        />
      )}
    </div>
  );
}
