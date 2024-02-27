'use client';

import JobTypes from '@/components/ProfilePage/JobTypes';
import Navigation from '@/components/ProfilePage/Navigation';

export default function ProfilePage() {
  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
        <Navigation selected='job-preferences' />
        {/* content */}
        <div className=' bg-[#f2f2f2]  py-[24px]'>
          <div className='flex flex-row flex-wrap items-start justify-center '>
            <div className='w-full max-w-[calc(100%-48px)] md:w-[900px]'>
              <JobTypes />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
