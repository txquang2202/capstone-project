'use client';

import { Button } from '@/components/Button';

export default function Sharing() {
  return (
    <div className='border-y-2 border-[#fccd9a] bg-[#fff5e9]'>
      <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-around sm:flex-row'>
          <h3 className='mb-6 text-center text-[24px] font-medium sm:mb-0 sm:text-left'>
            Câu chuyện sự nghiệp của bạn sẽ truyền cảm hứng đến rất nhiều người.
          </h3>
          <Button
            href='#!'
            intent='primary'
            size='large'
            className='h-[56px] w-[200px] text-[22px] font-[600] hover:bg-red-700'
          >
            Chia sẻ nhé
          </Button>
        </div>
      </div>
    </div>
  );
}
