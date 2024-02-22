'use client';

export default function Header() {
  return (
    <div className=' bg-gradient-to-l from-[#54151c] to-[#121212]'>
      <div className='mx-auto flex  max-w-7xl flex-col flex-wrap items-start px-4 py-12 font-semibold text-white sm:px-6 lg:px-8'>
        <h1>ITviec Blog - Ý tưởng phát triển sự nghiệp IT của bạn</h1>
        <div className='mt-8 flex flex-row flex-wrap items-center gap-4'>
          <div>
            <input
              className='focus:shadow-outline w-[550px]  appearance-none rounded border  px-3 py-4 leading-tight text-gray-700 shadow focus:outline-none'
              id='search'
              type='text'
              placeholder='Nhập từ khóa tìm kiếm'
            />
          </div>
          <div>
            <button className='flex flex-row items-center gap-1 rounded bg-red-600 px-16 py-4 hover:bg-red-700 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`h-4 w-5 `}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
              <p>Tìm kiếm</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
