'use client';

import { IconMail, IconPhoneCall, IconSend } from '@/components/Icons';

const Footer = () => {
  return (
    <footer className='footer relative'>
      <div className='container-xxl flex p-0 pb-[22px] pt-[48px]'>
        <div className='pl-4 pr-4 lg:w-1/4'>
          <div className='footer-logo'>
            <div className='footer-slogan ipt-2 text-md-start mx-auto'>
              <img
                height={50}
                className='logo-itviec h-[50px]'
                alt='logo-itviec'
                src='https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png'
              />
              <p className='normal-text pe-none mt-[5px]'>Ít nhưng mà chất</p>
            </div>
          </div>
        </div>
        <div className='w-full pl-4 pr-4 lg:w-1/5'>
          <h4
            aria-controls='about'
            className='footer-header text-silver-grey footer-accordion accordion-button collapsed bg-transparent'
            data-bs-target='#about'
            data-bs-toggle='collapse'
          >
            Về ITviec
          </h4>
          <div className='accordion-body small-text imx-md-0 flex flex-col'>
            <span>
              <a href='/vi'>Trang Chủ</a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/ve-itviec'>
                Về ITviec.com
              </a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/dich-vu-goi-y-ung-vien'>
                Dịch vụ gợi ý ứng viên
              </a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/lien-he'>
                Liên Hệ
              </a>
            </span>
            <span>
              <a data-controller='utm-tracking' href='/viec-lam-it'>
                Việc Làm IT
              </a>
            </span>
            <span>
              <a
                target='_blank'
                rel='canonical'
                href='https://itviec.com/blog/faq-cac-cau-hoi-thuong-gap/'
              >
                Câu hỏi thường gặp
              </a>
            </span>
          </div>
        </div>
        <div className='w-full pl-4 pr-4 lg:w-1/5'>
          <h4
            aria-controls='about'
            className='footer-header text-silver-grey footer-accordion accordion-button collapsed bg-transparent'
            data-bs-target='#about'
            data-bs-toggle='collapse'
          >
            Về ITviec
          </h4>
          <div className='accordion-body small-text imx-md-0 flex flex-col'>
            <span>
              <a href='/vi'>Trang Chủ</a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/ve-itviec'>
                Về ITviec.com
              </a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/dich-vu-goi-y-ung-vien'>
                Dịch vụ gợi ý ứng viên
              </a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/lien-he'>
                Liên Hệ
              </a>
            </span>
            <span>
              <a data-controller='utm-tracking' href='/viec-lam-it'>
                Việc Làm IT
              </a>
            </span>
            <span>
              <a
                target='_blank'
                rel='canonical'
                href='https://itviec.com/blog/faq-cac-cau-hoi-thuong-gap/'
              >
                Câu hỏi thường gặp
              </a>
            </span>
          </div>
        </div>
        <div className='w-full pl-4 pr-4 lg:w-1/5'>
          <h4
            aria-controls='about'
            className='footer-header text-silver-grey footer-accordion accordion-button collapsed bg-transparent'
            data-bs-target='#about'
            data-bs-toggle='collapse'
          >
            Về ITviec
          </h4>
          <div className='accordion-body small-text imx-md-0 flex flex-col'>
            <span>
              <a href='/vi'>Trang Chủ</a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/ve-itviec'>
                Về ITviec.com
              </a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/dich-vu-goi-y-ung-vien'>
                Dịch vụ gợi ý ứng viên
              </a>
            </span>
            <span>
              <a target='_blank' rel='canonical' href='/lien-he'>
                Liên Hệ
              </a>
            </span>
            <span>
              <a data-controller='utm-tracking' href='/viec-lam-it'>
                Việc Làm IT
              </a>
            </span>
            <span>
              <a
                target='_blank'
                rel='canonical'
                href='https://itviec.com/blog/faq-cac-cau-hoi-thuong-gap/'
              >
                Câu hỏi thường gặp
              </a>
            </span>
          </div>
        </div>
        <div className='pl-4 pr-4 lg:w-1/4'>
          <h4 className='footer-header imx-md-0 text-silver-grey ipy-4 pe-none py-[16px]'>
            Liên hệ để đăng tin tuyển dụng tại:
          </h4>
          <div className='imx-md-0 small-text text-dark-grey flex flex-col py-[16px]'>
            <div className='pe-none flex items-center pb-[12px]'>
              <IconPhoneCall className='icon-sm mr-1' />
              <p className='ims-2'>Hồ Chí Minh: (+84) 977 460 519</p>
            </div>
            <div className='pe-none flex items-center pb-[12px]'>
              <IconPhoneCall className='icon-sm mr-1' />
              <p className='ims-2'>Hà Nội: (+84) 983 131 351</p>
            </div>
            <div className='pe-none flex items-center pb-[12px]'>
              <IconMail className='icon-sm mr-1' />
              <p className='ims-2'> Email: love@itviec.com</p>
            </div>
            <div className='flex items-center pb-[12px]'>
              <IconSend className='icon-sm mr-1' />
              <p className='ims-2'>
                <a target='_blank' href='/contact-form'>
                  Gửi thông tin liên hệ
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-0 opacity-25' />
      <div className='container-xxl footer-copyright flex justify-center p-0 py-5'>
        <p className='normal-text tiny-text text-dark-grey pr-4'>
          Copyright © IT VIEC JSC
        </p>
        <p className='footer-copyright-line mt-1'></p>
        <p className='normal-text tiny-text text-dark-grey pr-4'>
          MST: 0312192258
        </p>
      </div>
      <div className='footer-image absolute'>
        <img
          alt=''
          src='https://itviec.com/assets/footer-image-35f866330436404820ee462153a6b32edebdbdd90869eedacf2205b45fcc9f4a.svg'
        />
      </div>
    </footer>
  );
};

export default Footer;
