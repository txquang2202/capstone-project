// import { blog_TYPE_TEXT } from '@/constant/blog';
import dayjs from '@/lib/dayjs';
import { Blog } from '@/types/blog';

import { IconClock } from '../Icons';

type Props = {
  blog: Blog;
};

const BlogDetail = ({ blog }: Props) => {
  return (
    <div className='rounded-lg bg-white'>
      <div className='mx-6 pb-2 pt-6'>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col justify-center gap-2'>
            <div className='text-[22px] font-bold'>{blog.title}</div>
          </div>
        </div>
      </div>
      <div className='p-6'>
        <div className='text-rich-grey flex flex-col gap-2 text-sm'>
          <div className='flex items-center gap-1'>
            <IconClock size={16} color='var(--dark-grey' />
            {dayjs(blog.created_at).fromNow()}
          </div>
        </div>
        <div className='border-silver-grey my-6 border-b border-dashed'></div>
        <div className='text-[#121212]'>
          <div className='mb-4 text-[22px] font-bold'>blog content</div>
          <div
            className='list-disc'
            dangerouslySetInnerHTML={{
              __html: blog.content as unknown as string,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
