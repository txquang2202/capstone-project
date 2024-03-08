'use client';

import ListAppliedJob from '@/components/MyJobPage/ListAppliedJob';
import Navigation from '@/components/MyJobPage/Navigation';

export default function ProfilePage() {
  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
        <Navigation selected='applied' />
        <ListAppliedJob />
      </section>
    </main>
  );
}
