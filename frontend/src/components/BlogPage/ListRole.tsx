'use client';

import Link from 'next/link';

export default function ListRole() {
  return (
    <div className='container-xxl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='flex flex-row items-start justify-start'>
        <h2 className='text-3xl font-medium'>Vị trí IT được săn đón</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div className='mt-6 grid grid-flow-col grid-cols-2 grid-rows-7 gap-4'>
          {positions.slice(0, 14).map((position, index) => (
            <Link key={index} href='#!' className='hover:text-red'>
              {position}
            </Link>
          ))}
        </div>
        <div className='mt-6 grid grid-flow-col grid-cols-2 grid-rows-7 gap-4'>
          {positions.slice(14).map((position, index) => (
            <Link key={index} href='#!' className='hover:text-red'>
              {position}
            </Link>
          ))}
          <a
            href='#!'
            className='hover:text-dark-red text-red font-medium underline underline-offset-4 '
          >
            Xem tất cả vị trí IT
          </a>
        </div>
      </div>
    </div>
  );
}

const positions = [
  'Lập trình viên Java',
  'Lập trình viên PHP',
  'Lập trình viên JavaScript',
  'Lập trình viên HTML5',
  'Lập trình viên SQL',
  'Lập trình viên Android',
  'Lập trình viên iOS',
  'Tester',
  'Lập trình viên Ruby',
  'Lập trình viên Python',
  'Lập trình viên Ruby on Rails',
  'Lập trình viên .NET',
  'Lập trình viên NodeJS',
  'Lập trình viên Linux',
  'Lập trình viên OOP',
  'Lập trình viên Oracle',
  'Lập trình viên C++',
  'Lập trình viên WordPress',
  'Nhân viên thiết kế',
  'Quản trị cơ sở dữ liệu',
  'Lập trình viên ứng dụng di động',
  'Quản lý dự án',
  'Quản lý sản phẩm',
  'Kỹ sư cầu nối',
];
