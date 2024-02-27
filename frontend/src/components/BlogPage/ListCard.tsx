'use client';

import Card from './Card';

export default function ListCard() {
  return (
    <div className='container-xxl  px-4 py-8 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Card
          title='Công ty IT tốt nhất Việt Nam'
          description='Những công ty IT tốt nhất Việt Nam có điều gì đặc biệt? Họ đã phát triển như thế nào sau mỗi năm? Cùng khám phá thêm về những công ty tuyệt vời này nhé!'
          url='#!'
        />
        <Card
          title='Sự nghiệp IT'
          description='Không bao giờ là quá muộn để trở nên xuất sắc trong ngành IT. Từ hình mẫu thực tế, khám phá con đường sự nghiệp IT cho riêng bạn.'
          url='#!'
        />
        <Card
          title='Ứng tuyển & Thăng tiến'
          description='Từ cách viết CV đến phỏng vấn, deal lương. Tận dụng lời khuyên từ người thật, việc thật. Sớm thành "pro", chốt luôn công việc IT tuyệt vời như ý muốn!'
          url='#!'
        />
        <Card
          title='Chuyên môn IT'
          description='Cập nhật kiến thức về các ngôn ngữ lập trình, công nghệ ngành IT và tự học với 100+ tài liệu lập trình IT sau đây. Khám phá ngay!'
          url='#!'
        />
      </div>
    </div>
  );
}
