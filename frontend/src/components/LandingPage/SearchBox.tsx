'use client';

import { Button } from '@/components/Button';
import { IconSearch } from '@/components/Icons';

const SearchBox = () => {
  return (
    <div className='search-box bg-header-gradient px-40 py-[64px]'>
      <h1 className='pb-[32px] font-bold text-white'>
        916 Việc làm IT cho Developer "Chất"
      </h1>
      <div className='search-box flex w-full flex-row text-white'>
        <div className='search-city imb-2 imb-md-0 search-form-city-section h-[56px] flex-shrink-0'>
          <select
            name='city'
            id='city'
            className='appearance-none rounded-md border bg-white p-2 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none'
          >
            <option value=''>Tất cả thành phố</option>
            <option
              value='ho-chi-minh-hcm'
              className='bg-gray-100 hover:bg-gray-200'
            >
              Ho Chi Minh
            </option>
            <option value='ha-noi' className='bg-gray-100 hover:bg-gray-200'>
              Ha Noi
            </option>
            <option value='da-nang' className='bg-gray-100 hover:bg-gray-200'>
              Da Nang
            </option>
            <option value='others' className='bg-gray-100 hover:bg-gray-200'>
              Others
            </option>
          </select>
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
          />
          <Button
            intent='primary'
            size='large'
            className='h-[56px] w-[240px] text-[18px] font-[600] hover:bg-red-700'
          >
            {/* feather icon sprite */}
            <IconSearch className='mr-1 h-5 w-5' />
            Tìm kiếm
          </Button>
        </div>
      </div>
      <div className='mt-[28px] flex w-full flex-row items-center'>
        <span className='text-silver-grey font-[400]'>
          Mọi người đang tìm kiếm:{' '}
        </span>
        <div className='flex flex-1'>
          {['Java', 'Python', 'React', 'NodeJS', 'VueJS'].map((item, index) => (
            <a key={index} className='itag itag-lg itag-dark ml-2 px-4 py-2'>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
