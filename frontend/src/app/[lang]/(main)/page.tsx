'use client';

import BestFeatures from '@/components/LandingPage/BestFeatures';
import FeaturedBlog from '@/components/LandingPage/FeaturedBlog';
import SearchBox from '@/components/LandingPage/SearchBox';

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
        <SearchBox />

        <BestFeatures />

        <FeaturedBlog />
      </section>
    </main>
  );
}
