'use client';

import Delete from '@/components/SettingPage/Delete';
import Information from '@/components/SettingPage/Information';
import Notification from '@/components/SettingPage/Notification';

export default function ProfilePage() {
  return (
    <div className='scroll-smooth bg-[#f2f2f2] pt-[4px] focus:scroll-auto'>
      <main className=' bg-[#f2f2f2]  py-[24px]'>
        <div className='flex flex-row flex-wrap items-start justify-center'>
          {/* content */}
          <div className='w-full max-w-[calc(100%-48px)] md:w-[900px]'>
            {/* account */}
            <Information />
            {/* notifications */}
            <div className='mt-6'>
              <Notification />
            </div>

            {/* delete acount */}
            <div className='mt-6'>
              <Delete />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
