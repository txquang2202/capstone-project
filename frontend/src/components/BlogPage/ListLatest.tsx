import { GET_BLOGS } from '@/graphql/blog';
import { getClient } from '@/lib/client';
import { Blog } from '@/types/blog';

import SpringCard from './SpringCard';

export default async function ListLatest() {
  const {
    data: { blogs },
  } = await getClient().query({
    query: GET_BLOGS,
    variables: {
      skip: 0,
      take: 3,
    },
  });

  return (
    <div className='container-xxl  px-4 py-8 sm:px-6 lg:px-8'>
      <div className='flex flex-row items-start justify-between'>
        <h2 className='text-3xl font-medium'>Mới nhất</h2>
        <a
          href='#!'
          className='text-red hover:text-dark-red font-semibold underline underline-offset-4 '
        >
          Xem tất cả
        </a>
      </div>

      <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {blogs.lenth === 0 ? (
          <p className='text-gray-500'>Không có blog nào.</p>
        ) : (
          <>
            {blogs.map((blog: Blog) => (
              <SpringCard
                key={blog.id}
                imageUrl='https://itviec.com/blog/wp-content/uploads/2024/02/spring-framework-blog-thumbnail-vippro-700x368.jpg'
                title={blog.title}
                description={blog.content}
                tags={['Chuyên môn IT', 'Tài liệu JS']}
                url={`/blog/${blog.slug}`}
                // readTime={blog.readTime}
              />
            ))}
          </>
        )}

        {/* <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2024/02/spring-framework-blog-thumbnail-vippro-700x368.jpg'
          title='Spring là gì? Spring Framework là gì?'
          description='Spring Framework giúp lập trình viên dễ dàng tạo các ứng dụng Java Enterprise (Java EE) và cung cấp mọi thứ bạn cần để sử dụng ngôn ngữ Java. Là mã nguồn mở, Spring có cộng đồng rộng lớn và…'
          tags={['Chuyên môn IT']}
          url='/blog/the-evolution-of-programming-paradigms'
          readTime='15 phút'
        />
        <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2024/01/quy-trinh-tuyen-dung-blog-vippro-700x368.png'
          title='Bí quyết xây dựng quy trình tuyển dụng giúp tăng tỷ lệ thành công'
          description='Việc xây dựng một quy trình tuyển dụng chỉ dựa vào nhu cầu tìm kiếm nhân tài của công ty mà không cân nhắc hành vi tìm kiếm và ứng tuyển của ứng viên IT thường sẽ xa rời thực…'
          tags={['Dành cho Nhà tuyển dụng IT', 'Xu hướng tuyển dụng IT']}
          url='/blog/the-evolution-of-programming-paradigms'
          readTime='7 phút'
        />
        <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2024/01/jquery-la-gi-blog-thumbnail-vippro-700x368.jpg'
          title='Những điều cần biết về jQuery – Thư viện Javascript hàng đầu'
          description='jQuery là gì? Trong danh sách các công cụ và thư viện cho lập trình viên, jQuery nổi bật là một thư viện JavaScript mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong cộng đồng phát triển web….'
          tags={['Chuyên môn IT', 'Tài liệu JS']}
          url='/blog/the-evolution-of-programming-paradigms'
          readTime='10 phút'
        /> */}
      </div>
    </div>
  );
}
