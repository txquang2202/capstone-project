import { GET_BLOGS } from '@/graphql/blog';
import { getClient } from '@/lib/client';
import { Blog } from '@/types/blog';

import SpringCard from './SpringCard';

export default async function ListMost() {
  const {
    data: { blogs },
  } = await getClient().query({
    query: GET_BLOGS,
    variables: {
      skip: 3,
      take: 3,
    },
  });

  return (
    <div className='container-xxl px-4 py-8 sm:px-6 lg:px-8'>
      <div className='flex flex-row items-start justify-start'>
        <h2 className='text-3xl font-medium'>Đọc nhiều nhất</h2>
      </div>
      <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {blogs.length < 3 ? (
          <p className='text-gray-500'>Không có blog nào.</p>
        ) : (
          <>
            {blogs.map((blog: Blog) => (
              <SpringCard
                key={blog.id}
                imageUrl='https://itviec.com/blog/wp-content/uploads/2024/02/spring-framework-blog-thumbnail-vippro-700x368.jpg'
                title={blog.title}
                description={blog.content}
                // tags={['Chuyên môn IT', 'Tài liệu JS']}
                url={`/blog/${blog.slug}`}
                // readTime={blog.readTime}
              />
            ))}
          </>
        )}
        {/* <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2023/12/itviec-it-salary-report-2023-2024-mini-press-realease-en-vippro-700x368.png'
          title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
          description='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals in Vietnam 2023-2024: Data-driven for better decision making”…'
          tags={['Báo cáo lương IT', 'Dành cho nhà tuyển dụng IT']}
          url='#!'
          readTime='2 phút'
        />
        <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2022/12/ly-do-nghi-viec-blog-thumbnail-700x368.jpg'
          title='Doanh nghiệp cần lưu ý 3 lý do nghỉ việc thật sự của chuyên gia IT'
          description='Bạn đang đối diện với thực trạng không thể giữ người ở công ty lâu dài? Liệu những lý do như “việc gia đình” có phải là lý do nghỉ việc thật sự? Đọc bài viết này để hiểu rõ…'
          tags={['Báo cáo lương IT', 'Dành cho nhà tuyển dụng IT']}
          url='#!'
          readTime='7 phút'
        />
        <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2023/11/mau-cv-an-tuong-blog-thumbnail-vippro-700x368.jpg'
          title='Hướng dẫn viết mẫu CV ấn tượng theo 4 “điểm vàng” mà nhà tuyển dụng chú ý nhất'
          description='Có nhiều nghiên cứu đã được đưa ra về thời gian mà nhà tuyển dụng đọc một CV IT như 6 giây, 25 giây, 3 phút…  nhưng tóm lại là: CV của bạn có thể không được xem kĩ như…'
          tags={['CV IT', 'Ứng tuyển & Thăng tiến']}
          url='#!'
          readTime='10 phút'
        /> */}
      </div>
    </div>
  );
}
