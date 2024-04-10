import { Select } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { IconChevronDown, IconSearch } from '@/components/Icons';
import { routes } from '@/configs/router';
import { SEARCH_OPTIONS } from '@/constant/global';

import { AppLink } from '../AppLink';

const SearchBox = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(SEARCH_OPTIONS[0].value);

  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      routes.search.pathParams({ keyword: selected }) + `?search=${keyword}`
    );
  };

  const handleTagClick = (skill: string) => {
    router.push(
      routes.search.pathParams({ keyword: selected }) + `?search=${skill}`
    );
  };

  return (
    <div className='search-box bg-header-gradient px-40 py-[64px]'>
      <h1 className='pb-[32px] font-bold text-white'>
        916 Việc làm IT cho Developer "Chất"
      </h1>
      <div className='search-box flex w-full flex-row text-white'>
        <div className='search-city imb-2 imb-md-0 search-form-city-section h-[56px] flex-shrink-0'>
          <Select
            data={SEARCH_OPTIONS}
            size='lg'
            value={selected}
            onChange={(value) => setSelected(value as string)}
            className='it-input flex-1 [&_input]:h-[56px]'
            defaultValue='hcm'
            classNames={{
              option: 'text-base py-1 px-3 hover:bg-white-red',
            }}
            rightSection={
              <IconChevronDown color='var(--dark-grey)' size={24} />
            }
          />
          <div className='pointer-events-none absolute right-0 top-0 mr-2 mt-2'>
            <svg
              className='h-4 w-4 fill-current text-gray-700'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z' />
            </svg>
          </div>
        </div>
        <div className='flex w-full flex-1'>
          <input
            className='focus:shadow-outline mx-[12px] flex h-[56px] flex-1 appearance-none rounded border  px-3 py-4 leading-tight text-gray-700 shadow focus:outline-none'
            id='search'
            type='text'
            placeholder='Nhập từ khoá theo kỹ năng, chức vụ, công ty...'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <AppLink
            nextLink={false}
            // href={routes.search.path}
            href='#'
            onClick={handleSearch}
            intent='primary'
            size='xl'
            className='w-[240px]'
            icon={<IconSearch className='mr-1 h-5 w-5' />}
          >
            Tìm kiếm
          </AppLink>
        </div>
      </div>
      <div className='mt-[28px] flex w-full flex-row items-center'>
        <span className='text-silver-grey font-[400]'>
          Mọi người đang tìm kiếm:{' '}
        </span>
        <div className='flex flex-1'>
          {['Java', 'Python', 'React', 'NodeJS', 'VueJS'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleTagClick(item)}
              className='itag itag-lg itag-dark ml-2 cursor-pointer px-4 py-2'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
