'use client';

import { useQuery } from 'react-query';

import { apiGet } from '@/apis/api';
import { BlogTable } from '@/components/Customer';
import { Tag } from '@/types/blog';

export default function Page() {
  const getTags = async () => {
    const response = await apiGet<Tag[]>('/api/tags', {}, {});
    return response.data;
  };
  const { data, isLoading, error } = useQuery<Tag[], Error>('tags', getTags);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Not found</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='container mx-auto px-4'>
      <BlogTable allTags={data} />
    </div>
  );
}
