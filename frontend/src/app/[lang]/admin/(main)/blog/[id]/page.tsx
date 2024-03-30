'use client';

import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

import { BlogDetail } from '@/components/Admin';
import { GET_BLOG, GetBlogResponse, GetBlogVariable } from '@/graphql/blog';

export default function Page() {
  const params = useParams();
  const { data, loading } = useQuery<GetBlogResponse, GetBlogVariable>(
    GET_BLOG,
    {
      variables: { blogId: params.id as string },
    }
  );

  if (loading) return <div>Loading...</div>;

  if (!data?.blog) return <div>Not found</div>;

  return (
    <div className='mx-[100px] my-10 rounded shadow'>
      <BlogDetail blog={data.blog} />
    </div>
  );
}
