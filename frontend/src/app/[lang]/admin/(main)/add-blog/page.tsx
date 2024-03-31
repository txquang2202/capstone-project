'use client';

import { useQuery } from 'react-query';

import { apiGet } from '@/apis/api';
import { AddBlog } from '@/components/Admin';
import { Tag } from '@/types/blog';

const getTags = async () => {
  const response = await apiGet<Tag[]>('/api/tags', {}, {});
  return response.data;
};
export default function Page() {
  const { data, isLoading, error } = useQuery<Tag[], Error>('tags', getTags);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Not found</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='mx-[100px] my-10 w-full rounded shadow'>
      <AddBlog tags={data} />
    </div>
  );
}
