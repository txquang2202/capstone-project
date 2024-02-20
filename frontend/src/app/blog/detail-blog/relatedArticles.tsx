import React from 'react';
import Link from 'next/link';
import RelatedArticleItem from './article';

const RelatedArticles: React.FC = () => {
  return (
    <div className='p-4'>
      <h3 className='font-semibold'>Related Articles</h3>
      {articles.slice(0, 18).map((aricle, index) => (
        <RelatedArticleItem key={index} title={aricle} url='#!' />
      ))}
      <div className='mt-4 px-4 text-center'>
        <p className='text-sm font-semibold text-red-500 underline underline-offset-4 hover:text-red-600'>
          <Link href='#!'>Xem tất cả bài viết cùng chuyên mục</Link>
        </p>
      </div>
    </div>
  );
};

const articles = [
  'Doanh nghiệp cần lưu ý 3 lý do nghỉ việc thật sự của chuyên gia IT',
  'Công ty thuộc ngành nghề, loại hình nào đang trả lương IT ở Việt Nam cao nhất?',
  'ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”',
  'ITviec phát hành “Báo cáo lương IT 2023-2024: Mọi quyết định đều dễ dàng hơn khi đã có số liệu”',
  '4 thành công nổi bật của Workshop “Khai phá sức mạnh đội ngũ” dành cho nhà tuyển dụng',
];
export default RelatedArticles;
