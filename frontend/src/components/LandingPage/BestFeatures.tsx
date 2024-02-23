'use client';

import { Button } from '@/components/Button';

const BestFeatures = () => {
  return (
    <div className='icontainer mb-[120px] mt-[64px]'>
      <div className='text-center'>
        <h1>Công cụ tốt nhất cho hành trang ứng tuyển của bạn</h1>
      </div>
      <div className='mt-[48px] grid grid-cols-3 gap-[40px]'>
        <div className='relative flex flex-row'>
          <div className=''>
            <img
              src='https://itviec.com/assets/homepage/user-profile-704fabd6761d6f9a4efc54371bc6cc0bef771ff9ae1dce97b2cb137aa74732d6.svg'
              alt=''
              className='h-[80px] w-[80px]'
            />
          </div>
          <div className='ml-[16px]'>
            <h3>Hồ sơ cá nhân</h3>
            <p className='line-height-[1.8] mt-[8px]'>
              Kiến tạo hồ sơ ITviec với cấu trúc chuẩn mực cùng các gợi ý chi
              tiết
            </p>
            <Button intent='secondary' size='medium' className='mt-[24px]'>
              Cập nhật hồ sơ
            </Button>
          </div>
          <div className='radial-gradient-box radial-gradient-box-right mx-auto'></div>
        </div>
        <div className='relative flex flex-row'>
          <div className=''>
            <img
              src='https://itviec.com/assets/homepage/cv-template-c6f6a4b0c4211ea345421e77c4e1ce22c2392cfebee8993324eee7015ea44d89.svg'
              alt=''
              className='h-[80px] w-[80px]'
            />
          </div>
          <div className='ml-[16px]'>
            <div className='flex	 flex-row items-center'>
              <h3>
                Mẫu CV
                {/* Badge mới */}
              </h3>
              <div className='bg-success-color ml-[8px] inline-block rounded-[4px] px-[8px] py-[4px] text-[12px] text-white'>
                MỚI
              </div>
            </div>

            <p className='line-height-[1.8] mt-[8px]'>
              Mẫu CV MỚI Nâng cấp CV với các mẫu CV IT chuyên nghiệp - được nhà
              tuyển dụng đề xuất
            </p>
            <Button intent='primary' size='medium' className='mt-[24px]'>
              Xem mẫu CV
            </Button>
            <div className='radial-gradient-box radial-gradient-box-left mx-auto'></div>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className=''>
            <img
              src='https://itviec.com/assets/homepage/blog-a0cee7c69f270172e8c4470bde32d5c15e0a113cb4c3aa92f9d8bfc9ab92c8c7.svg'
              alt=''
              className='h-[80px] w-[80px]'
            />
          </div>
          <div className='ml-[16px]'>
            <h3>Blog về IT</h3>
            <p className='line-height-[1.8] mt-[8px]'>
              Cập nhật thông tin lương thưởng, nghề nghiệp và kiến thức ngành IT
            </p>
            <Button intent='secondary' size='medium' className='mt-[24px]'>
              Khám phá blog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFeatures;
