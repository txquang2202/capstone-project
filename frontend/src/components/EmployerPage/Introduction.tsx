'use client';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/Button';

const EmployerIntroduction = () => {
  return (
    <section className='bg-gradient-search'>
      <div className='icontainer flex flex-row-reverse items-center px-5 py-[120px]	'>
        <div className='flex-1 ps-20'>
          <img
            alt='hide-the-best-it'
            className='w-full'
            src='https://itviec.com/assets/employer_landing/hire-the-best-it-15-95d4b6df6293a405cd77c094b8c7eb5dcc99cf8711f5b47751c841cfa51023a0.png'
          />
        </div>
        <div className='text-it-white  flex-1'>
          <div className='left-box-content flex flex-col items-start'>
            <h1 className='lg-title mt-8'>
              Tuyển dụng Nhân tài IT tại Việt Nam cùng ITviec
            </h1>
            <p className='normal-text parapraph mb-12 mt-6'>
              Với hiểu biết sâu sắc về lĩnh vực IT và các kỹ năng chuyên môn,
              chúng tôi có thể giúp bạn tiếp cận và tuyển dụng những ứng viên IT
              tốt nhất.
            </p>
            <a href='#contactme'>
              <Button intent='primary' size='xl' className='contact-now-btn'>
                Liên hệ ngay
              </Button>
            </a>
            <div className='paragraph mt-8 flex items-center'>
              <p className='text-dark-grey me-1'>Đã có tài khoản Khách hàng?</p>
              <a
                className='text-it-white text-decoration-underline'
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  signIn('keycloak');
                }}
              >
                Đăng nhập
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerIntroduction;
