'use client';

import SpringCard from './SpringCard';

export default function ListSelected() {
  return (
    <div className='container-xxl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='flex flex-row items-start justify-start'>
        <h2 className='text-3xl font-medium'>Bài viết chọn lọc</h2>
      </div>

      <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2023/04/Artboard-1-700x377.jpg'
          title='“Là IT Thì Mình Cứ Viết Đi” – Cuộc thi viết hấp dẫn nhất cho dân IT chính thức trở lại'
          description='Cuộc thi viết “Là IT Thì Mình Cứ Viết Đi” do ITviec tổ chức từ ngày 26/04/2023 đến 26/06/2023, nhân dịp kỷ niệm 10 năm thành lập. Cuộc thi là sân chơi hấp dẫn cổ vũ tất cả anh em…'
          tags={['Chuyện IT']}
          url='#!'
          readTime='15 phút'
        />
        <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2022/05/framework-la-gi-thumbnail-700x368.jpg'
          title='Top 15+ framework back-end, front-end và mobile phổ biến nhất 2023'
          description='Là một lập trình viên, bạn không cần phải phát triển mọi ứng dụng lại từ đầu bởi vì đã có các công cụ được thiết kế để hỗ trợ bạn, framework là một trong những công cụ hữu dụng…'
          tags={['Chuyên môn IT']}
          url='#!'
          readTime='7 phút'
        />
        <SpringCard
          imageUrl='https://itviec.com/blog/wp-content/uploads/2022/07/tu-ao-lang-den-out-trinh-thumbnail-700x368.jpg'
          title='“TỪ AO LÀNG ĐẾN OUT TRÌNH” – Lần đầu tiên chuyên gia IT giãi bày bằng con chữ'
          description='Nhân kỷ niệm 9 năm ngày thành lập, ITviec tổ chức cuộc thi viết “Từ Ao làng đến Out trình” nhằm mang đến một sân chơi mới dành cho “anh chị em” IT – nơi để mọi người cùng nhau…'
          tags={['Chuyện IT']}
          url='#!'
          readTime='10 phút'
        />
      </div>
    </div>
  );
}
