'use client';

import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';

import { apiGet } from '@/apis/api';
import { BlogDetail } from '@/components/Customer';
import { Blog, BlogTag, Tag } from '@/types/blog';

type FetchData = {
  blog: Blog;
  blogTag: BlogTag[];
  allTags: Tag[];
};

const FetchData = async (id: string) => {
  const blogDetailResp = await apiGet<Blog>(`/api/blogs/${id}`);
  const blogTagRes = await apiGet<BlogTag[]>(`/api/blogTag/${id}`);
  const allTagsResp = await apiGet<Tag[]>('/api/tags', {}, {});

  const resp: FetchData = {
    blog: blogDetailResp.data,
    blogTag: blogTagRes.data,
    allTags: allTagsResp.data,
  };
  return resp;
};

export default function Page() {
  const params = useParams();
  const { isLoading, data, error } = useQuery<FetchData, Error>(
    ['fetchData', params],
    () => FetchData(params?.id as string)
  );

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Not found</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='mx-[100px] my-10 w-full rounded shadow'>
      <BlogDetail blog={data.blog} blogTag={data.blogTag} tags={data.allTags} />
    </div>
  );
}
