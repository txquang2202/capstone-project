'use client';

import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { IconChevronsRight } from '@/components/Icons';
import PostFrame from '@/components/LandingPage/PostFrame';
import { GET_BLOGS } from '@/graphql/blog';
import { Blog } from '@/types/blog';

const FeaturedBlog = () => {
  const { data } = useQuery(GET_BLOGS, {
    variables: {
      skip: 0,
      take: 5,
    },
  });

  const [firstBlog, ...blogs] = data?.blogs || [];

  return (
    <div className='bg-light-grey min-vh-main pb-[100px]'>
      <div className='icontainer'>
        <div className='pd-[100px] pt-[80px]'>
          <div className='mb-[32px] flex flex-row items-center justify-between'>
            <h1 className=''>Bài viết nổi bật</h1>
            <Link className='hyperlink flex items-center' href='/blog'>
              Xem tất cả
              <IconChevronsRight className='ml-1 h-[20px] w-[20px]' />
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            {firstBlog && (
              <PostFrame
                featured
                title={firstBlog.title}
                content={firstBlog.content}
                link={`/blog/${firstBlog.slug}`}
              />
            )}
            <div className='blog-other grid grid-cols-2 gap-4'>
              {blogs?.map((blog: Blog) => (
                <PostFrame
                  key={blog.id}
                  title={blog.title}
                  content={blog.content}
                  link={`/blog/${blog.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
