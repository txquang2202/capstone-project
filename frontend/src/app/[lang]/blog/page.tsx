/**
 * DEMO CLIENT COMPONENT - FETCH DATA
 */
'use client';

import { useSuspenseQuery } from '@apollo/client';

import ListCard from '@/components/BlogPage/ListCard';
import ListLatest from '@/components/BlogPage/ListLatest';
import ListMost from '@/components/BlogPage/ListMost';
import ListRole from '@/components/BlogPage/ListRole';
import ListSelected from '@/components/BlogPage/ListSelected';
import ListSkill from '@/components/BlogPage/ListSkill';
import SearchBox from '@/components/BlogPage/SearchBox';
import Sharing from '@/components/BlogPage/Sharing';
import { GET_BLOGS } from '@/graphql/blog';

const BlogPage = () => {
  const { data } = useSuspenseQuery(GET_BLOGS, {
    variables: {
      skip: 0,
      take: 10,
    },
  });

  console.log('data', data);

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
