'use client';

import { useSuspenseQuery } from '@apollo/client';

// import { JobItem } from '@/components/Search';
// import { routes } from '@/configs/router';
import { GET_BLOGS } from '@/graphql/blog';
// import useAppRouter from '@/hooks/useAppRouter';
import { Blog } from '@/types/blog';

export default function Page() {
  const {
    data: { blogs },
  } = useSuspenseQuery<DataResponse<'blogs', Blog[]>>(GET_BLOGS);
  // const router = useAppRouter();

  return (
    <div className='grid grid-cols-3 gap-4 p-5'>
      {blogs.map((blog) => (
        <div key={blog.id} className='rounded shadow'>
          {/* <JobItem
            {...blog}
            onSelect={() =>
              router.push(routes.customerJobDetail.pathParams({ id: blog.id }))
            }
          /> */}
        </div>
      ))}
    </div>
  );
}
