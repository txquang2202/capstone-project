'use client';

export default function SearchBox() {
  return (
    <div className=' bg-header-gradient'>
      <div className='container-xxl flex  flex-col flex-wrap items-start px-4 py-12 font-semibold text-white sm:px-6 lg:px-8'>
        <h1 className='text-[36px] font-bold text-white'>
          ITviec Blog - Ý tưởng phát triển sự nghiệp IT của bạn
        </h1>
        {/* <div className='mt-8 flex flex-row flex-wrap items-center gap-4'>
          <div>
            <input
              className='focus:shadow-outline w-[550px]  appearance-none rounded border  px-3 py-4 leading-tight text-gray-700 shadow focus:outline-none'
              id='search'
              type='text'
              placeholder='Nhập từ khóa tìm kiếm'
            />
          </div>
          <div>
            <Button
              intent='primary'
              size='large'
              className='h-[56px] w-[240px] text-[18px] font-[600] hover:bg-red-700'
            >
              <IconSearch className='mr-1 h-5 w-5' />
              Tìm kiếm
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
