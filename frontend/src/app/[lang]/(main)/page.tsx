'use client';

import { style as Lexend } from '@/components/Font/Lexend';
import BestFeatures from '@/components/LandingPage/BestFeatures';
import FeaturedBlog from '@/components/LandingPage/FeaturedBlog';
import SearchBox from '@/components/LandingPage/SearchBox';

export default function HomePage() {
  return (
    <main>
      <section className='font-lexend bg-white'>
        <SearchBox />

        <BestFeatures />

        <FeaturedBlog />
        <Lexend />
      </section>
    </main>
  );
}
