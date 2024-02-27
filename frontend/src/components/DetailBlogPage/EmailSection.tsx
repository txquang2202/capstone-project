import React from 'react';

import { Button } from '@/components/Button';

const EmailSection: React.FC = () => {
  return (
    <div className=' mt-5 rounded-md border border-gray-200 bg-black px-4 py-3 md:hidden  lg:flex'>
      <div className='p-4'>
        <p className='text-3xl font-semibold text-white'>
          ITviec Blog – Ý Tưởng Phát Triển Sự Nghiệp IT Của Bạn
        </p>
        <div className='mt-4 px-12'>
          <hr className=' h-[1px] w-full border-none bg-gray-200 ' />
        </div>
        <div className='col-span-2 mt-5 flex flex-col gap-y-3 '>
          <input
            className='focus:shadow-outline appearance-none rounded border  py-3.5  leading-tight text-gray-700 shadow focus:outline-none'
            type='email'
            id='email'
            placeholder='Nhập email của bạn'
          />
          <Button
            intent='primary'
            size='large'
            className='h-[46px] w-full text-[16px] font-[500] hover:bg-red-700'
          >
            Đăng kí nhận tin
          </Button>
          <p className='text-center text-[12px] text-white'>
            Bằng việc cung cấp địa chỉ email, bạn đồng ý với các Điều{' '}
            <span className='underline underline-offset-1'>khoản dịch vụ</span>{' '}
            và{' '}
            <span className='underline underline-offset-1'>
              Chính sách quyền riêng tư
            </span>{' '}
            của ITviec liên quan đến thông tin riêng tư của bạn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
