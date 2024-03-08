'use client';

import { IconChevronsRight } from '@/components/Icons';
import PostFrame from '@/components/LandingPage/PostFrame';

const FeaturedBlog = () => {
  return (
    <div className='bg-light-grey min-vh-main pb-[100px]'>
      <div className='icontainer'>
        <div className='pd-[100px] pt-[80px]'>
          <div className='mb-[32px] flex flex-row items-center justify-between'>
            <h1 className=''>Bài viết nổi bật</h1>
            <a className='hyperlink flex items-center' href='#'>
              Xem tất cả
              <IconChevronsRight className='ml-1 h-[20px] w-[20px]' />
            </a>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <PostFrame
              featured
              title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
              content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
              link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
            />
            <div className='blog-other grid grid-cols-2 gap-4'>
              <PostFrame
                title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
              />
              <PostFrame
                title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
              />
              <PostFrame
                title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
              />
              <PostFrame
                title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
