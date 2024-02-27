'use client';

import { IconArrowRightCircle } from '@/components/Icons';

const EmployerContact = () => {
  return (
    <section className='employer-contact-container'>
      <div className='icontainer px-5 py-[120px]'>
        <div className='text-it-white'>
          <div className='lg-title'>Tìm kiếm Nhân tài IT phù hợp</div>
          <p className='normal-text pb-16 pt-6'>
            Để lại thông tin liên hệ để nhận tư vấn từ Phòng Chăm sóc Khách hàng
            của ITviec.
          </p>
        </div>
        <div className='flex'>
          <div className='contact-form'>sad</div>
          <div className='text-it-white contact-info mt-4 lg:mt-0'>
            <div className='contact-box border-radius-large mb-4 flex p-6'>
              <span className='text-it-red flex items-center'>
                <IconArrowRightCircle width={24} height={24} />
              </span>
              <div className='text-it-white ms-3'>
                <p className='normal-text'>Hotline Hồ Chí Minh</p>
                <h3>0977 460 519</h3>
              </div>
            </div>
            <div className='contact-box border-radius-large mb-4 flex p-6'>
              <span className='text-it-red flex items-center'>
                <IconArrowRightCircle width={24} height={24} />
              </span>
              <div className='text-it-white ms-3'>
                <p className='normal-text'>Hotline Hà Nội</p>
                <h3>0983 131 531</h3>
              </div>
            </div>
            <div className='contact-box border-radius-large mb-4 flex p-6'>
              <span className='text-it-red flex items-center'>
                <IconArrowRightCircle width={24} height={24} />
              </span>
              <div className='text-it-white ms-3'>
                <p className='normal-text'>Thời gian làm việc</p>
                <h3>Thứ 2 - Thứ 6 | 8:30 - 17:00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerContact;
