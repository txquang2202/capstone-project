'use client';

import { useQuery } from 'react-query';

import { apiGet } from '@/apis/api';
import { BlogTable } from '@/components/Customer';
import { Blog, Tag } from '@/types/blog';

export default function Page() {
  const getTags = async () => {
    const response = await apiGet<Tag[]>('/api/tags', {}, {});
    return response.data;
  };
  const { data, isLoading, error } = useQuery<Tag[], Error>('tags', getTags);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Not found</div>;

  if (error) return <div>Error: {error.message}</div>;
  const blogs: Blog[] = [
    {
      id: '1',
      slug: 'blog-1',
      title: 'First Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      created_at: new Date(),
      time_read: 5,
      tags: [
        { id: '1', tag_name: 'React' },
        { id: '2', tag_name: 'JavaScript' },
      ],
    },
    {
      id: '2',
      slug: 'blog-2',
      title: 'Second Blog Post',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created_at: new Date(),
      time_read: 10,
      tags: [
        { id: '1', tag_name: 'React' },
        { id: '3', tag_name: 'Web Development' },
      ],
    },
  ];
  return (
    <div className='container mx-auto px-4'>
      <BlogTable blogs={blogs} allTags={data} />
    </div>
  );
}
