'use client';

import CoverLetter from '@/components/ProfilePage/CoverLetter';
import CVManagement from '@/components/ProfilePage/CVManagement';
import Navigation from '@/components/ProfilePage/Navigation';

export default function ProfilePage() {
  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
        <Navigation selected='manage-cv' />
        {/* content */}
        <div className=' bg-[#f2f2f2]  py-[24px]'>
          <div className='flex flex-row flex-wrap items-start justify-center '>
            <div className='w-full max-w-[calc(100%-48px)] md:w-[900px]'>
              <CVManagement />
              {/* cover letter */}
              <div className='mt-6'>
                <CoverLetter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
