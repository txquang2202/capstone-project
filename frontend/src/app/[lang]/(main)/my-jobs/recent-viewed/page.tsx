'use client';

import ListViewedJob from '@/components/MyJobPage/ListViewedJob';
import Navigation from '@/components/MyJobPage/Navigation';

export default function ProfilePage() {
  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
        <Navigation selected='recent-viewed' />
        <ListViewedJob />
      </section>
    </main>
  );
}
