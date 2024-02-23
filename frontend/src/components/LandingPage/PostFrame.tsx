import { cn } from '@/lib/classNames';

import { IconChevronsRight } from '../Icons';

type Post = {
  title: string;
  content: string;
  link: string;
  featured?: boolean;
};

const PostFrame = (post: Post) => {
  return (
    <div className='card blog-card'>
      <a
        target='_blank'
        className='w-full'
        href='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
      >
        <img
          className='blog-card-image ls-is-cached lazyloaded w-full'
          alt=''
          src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzQ0UHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0087a305298b01ba111988622443f205e55c0443/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDa2dJdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--3263d723c11323cc2b0c9cde4ba89f4324662a03/itviec-it-salary-report-2023-2024-mini-press-realease-en-vippro.png'
        />
      </a>
      <div className='card-body bold-card-title mt-[12px] p-0'>
        {post.featured && (
          <h2 className='card-title text-rich-grey m-[12px]'>{post.title}</h2>
        )}
        <p
          className={cn(
            'card-text text-rich-grey m-[12px] opacity-75',
            !post.featured && 'text-clamp-2'
          )}
        >
          {post.content}
        </p>
      </div>
      <div className='card-body blog-card-link mb-[8px] flex items-end'>
        <a className='hyperlink' target='_blank' href={post.link}>
          Bắt đầu đọc
        </a>
        <span className='hyperlink flex items-center'>
          <IconChevronsRight className='ml-1 h-[20px] w-[20px]' />
        </span>
      </div>
    </div>
  );
};

export default PostFrame;
