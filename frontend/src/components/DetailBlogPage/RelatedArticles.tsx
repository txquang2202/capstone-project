import Link from 'next/link';
import React from 'react';

import { GET_TITLE_BLOGS } from '@/graphql/blog';
import { getClient } from '@/lib/client';
import { Blog } from '@/types/blog';

import Article from './Article';

export default async function RelatedArticles() {
  const {
    data: { blogs },
  } = await getClient().query({
    query: GET_TITLE_BLOGS,
    variables: {
      skip: 0,
      take: 6,
    },
  });
  return (
    <div className='rounded-md border border-gray-200 bg-white px-4 py-3'>
      <div className='p-4'>
        <h3 className='font-semibold'>Related Articles</h3>
        {blogs.map((blog: Blog, index: number) => (
          <Article key={index} title={blog.title} url={`${blog.slug}`} />
        ))}
        <div className='mt-4 px-4 text-center'>
          <p className='text-red hover:text-dark-text text-sm font-semibold underline underline-offset-4 '>
            <Link href='#!'>Xem tất cả bài viết cùng chuyên mục</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
