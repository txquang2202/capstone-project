'use client';

import { style as Lexend } from '@/components/Font/Lexend';
import BestFeatures from '@/components/LandingPage/BestFeatures';
import FeaturedBlog from '@/components/LandingPage/FeaturedBlog';
import SearchBox from '@/components/LandingPage/SearchBox';

// const BestFeatures = lazy(() =>
//   delayForDemo(import('@/components/LandingPage/BestFeatures'))
// );

// function delayForDemo(promise: any) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }

export default function HomePage() {
  // const [showBestFeatures, setShowBestFeatures] = useState(false);

  return (
    <main>
      <section className='font-lexend bg-white'>
        <SearchBox />

        {/* {showBestFeatures && ( */}
        {/* <Suspense fallback={<p>Loading...</p>}> */}
        <BestFeatures />
        {/* </Suspense> */}
        {/* )} */}

        <FeaturedBlog />
        <Lexend />
      </section>
    </main>
  );
}
