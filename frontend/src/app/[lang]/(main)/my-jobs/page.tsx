'use client';

import ListSavedJob from '@/components/MyJobPage/ListSavedJob';
import Navigation from '@/components/MyJobPage/Navigation';

export default function ProfilePage() {
  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
        <Navigation selected='my-jobs' />

        <ListSavedJob />
      </section>
    </main>
  );
}
