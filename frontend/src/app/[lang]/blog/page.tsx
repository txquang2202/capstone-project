/**
 * DEMO CLIENT COMPONENT - FETCH DATA
 */

import ListCard from '@/components/BlogPage/ListCard';
import ListLatest from '@/components/BlogPage/ListLatest';
import ListMost from '@/components/BlogPage/ListMost';
import ListRole from '@/components/BlogPage/ListRole';
import ListSelected from '@/components/BlogPage/ListSelected';
import ListSkill from '@/components/BlogPage/ListSkill';
import SearchBox from '@/components/BlogPage/SearchBox';
import Sharing from '@/components/BlogPage/Sharing';

const BlogPage = async () => {
  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2] focus:scroll-auto'>
        <SearchBox />
        {/* list card */}
        <ListCard />
        {/* news*/}
        <ListLatest />
        {/* most */}
        <ListMost />
        {/* selectied */}
        <ListSelected />
        {/* share */}
        <Sharing />
        {/* skills */}
        <ListSkill />
        {/* role */}
        <ListRole />
      </section>
    </main>
  );
};

export default BlogPage;
