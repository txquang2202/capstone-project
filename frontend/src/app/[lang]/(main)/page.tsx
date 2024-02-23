'use client';

import { Button } from '@/components/Button';
import {
  IconChevronsRight,
  IconMail,
  IconPhoneCall,
  IconSearch,
  IconSend,
} from '@/components/Icons';
import PostFrame from '@/components/LandingPage/PostFrame';
import { useLocale } from '@/locale';

export default function HomePage() {
  const { t } = useLocale();

  return (
    <main>
      <section className='bg-white'>
        <div className='search-box bg-header-gradient px-40 py-[64px]'>
          <h1 className='pb-[32px] font-bold text-white'>
            916 Việc làm IT cho Developer "Chất"
          </h1>
          <div className='search-box flex w-full flex-row text-white'>
            <div className='search-city imb-2 imb-md-0 search-form-city-section h-[56px] flex-shrink-0'>
              <select
                name='city'
                id='city'
                className='appearance-none rounded-md border bg-white p-2 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none'
              >
                <option value=''>Tất cả thành phố</option>
                <option
                  value='ho-chi-minh-hcm'
                  className='bg-gray-100 hover:bg-gray-200'
                >
                  Ho Chi Minh
                </option>
                <option
                  value='ha-noi'
                  className='bg-gray-100 hover:bg-gray-200'
                >
                  Ha Noi
                </option>
                <option
                  value='da-nang'
                  className='bg-gray-100 hover:bg-gray-200'
                >
                  Da Nang
                </option>
                <option
                  value='others'
                  className='bg-gray-100 hover:bg-gray-200'
                >
                  Others
                </option>
              </select>
              <div className='pointer-events-none absolute right-0 top-0 mr-2 mt-2'>
                <svg
                  className='h-4 w-4 fill-current text-gray-700'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z' />
                </svg>
              </div>
            </div>
            <div className='flex w-full flex-1'>
              <input
                className='focus:shadow-outline mx-[12px] flex h-[56px] flex-1 appearance-none rounded border  px-3 py-4 leading-tight text-gray-700 shadow focus:outline-none'
                id='search'
                type='text'
                placeholder='Nhập từ khoá theo kỹ năng, chức vụ, công ty...'
              />
              <Button
                intent='primary'
                size='large'
                className='h-[56px] w-[240px] text-[18px] font-[600] hover:bg-red-700'
              >
                {/* feather icon sprite */}
                <IconSearch className='mr-1 h-5 w-5' />
                Tìm kiếm
              </Button>
            </div>
          </div>
          <div className='mt-[28px] flex w-full flex-row items-center'>
            <span className='text-silver-grey font-[400]'>
              Mọi người đang tìm kiếm:{' '}
            </span>
            <div className='flex flex-1'>
              {['Java', 'Python', 'React', 'NodeJS', 'VueJS'].map(
                (item, index) => (
                  <a
                    key={index}
                    className='itag itag-lg itag-dark ml-2 px-4 py-2'
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
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
                  Kiến tạo hồ sơ ITviec với cấu trúc chuẩn mực cùng các gợi ý
                  chi tiết
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
                  Mẫu CV MỚI Nâng cấp CV với các mẫu CV IT chuyên nghiệp - được
                  nhà tuyển dụng đề xuất
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
                  Cập nhật thông tin lương thưởng, nghề nghiệp và kiến thức
                  ngành IT
                </p>
                <Button intent='secondary' size='medium' className='mt-[24px]'>
                  Khám phá blog
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='icontainer mb-[120px] mt-[64px]'>
          <div className='text-center'>
            <h1>Nhà tuyển dụng hàng đầu</h1>
          </div>
          <div className='mt-[48px] grid h-[436px] grid-cols-3 gap-[40px]'>
            {[
              {
                name: 'Techcombank',
                img: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM3d3REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--61527e04af1870bf7e9858df649b2a613e1fad9b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/lg-development-center-vietnam-logo.png',
                skills: ['Java', 'AWS', 'Agile', 'DevOps', 'Manager'],
                location: 'Ha Noi - Ho Chi Minh',
                jobs: 6,
              },
              {
                name: 'LG Electronics Development Vietnam (LGEDV)',
                img: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM3d3REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--61527e04af1870bf7e9858df649b2a613e1fad9b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/lg-development-center-vietnam-logo.png',
                skills: ['OOP', 'C++', 'Tester', 'Embedded', 'Android'],
                location: 'Ha Noi - Da Nang - Others',
                jobs: 5,
              },
              {
                name: 'ITViec',
                img: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM3d3REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--61527e04af1870bf7e9858df649b2a613e1fad9b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/lg-development-center-vietnam-logo.png',
                skills: [
                  'Ruby on Rails',
                  'PostgreSQL',
                  'JavaScript',
                  'CSS',
                  'UI-UX',
                  'Product Manager',
                ],
                location: 'Ha Noi - Ho Chi Minh',
                jobs: 1,
              },
            ].map((employer, index) => (
              <div className='employer-item flex flex-col' key={index}>
                <div className='relative flex grow flex-col items-center'>
                  <div
                    className='absolute 
                    z-[10]
                  '
                  >
                    <img
                      className='img-bg-card'
                      alt=''
                      src='https://itviec.com/assets/homepage/bg-top-emp-dbf208a6c6d014eb0e2aac10d0a397aac71694c28d5d23cb5709b613bf215fcb.svg'
                    />
                  </div>
                  <div className='top-employer-img box-shadow-dark z-[11] mx-auto mt-[32px] flex items-center justify-center rounded bg-white'>
                    <img
                      className='h-[80px] w-[80px]'
                      src={employer.img}
                      alt=''
                    />
                  </div>

                  <h3 className='employer-name mt-[24px] px-[16px] text-center text-black'>
                    {employer.name}
                  </h3>
                  <div className='flex flex-wrap justify-center gap-2 px-[16px] pt-[16px]'>
                    {employer.skills.map((item, index) => (
                      <div
                        className='itag itag-md itag-light disabled'
                        key={index}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className='bg-light-grey top-employer-footer flex items-center justify-between'>
                  <div className='small-text text-rich-grey'>
                    {employer.location}
                  </div>
                  <div className='flex flex-row items-center'>
                    {employer.jobs} Việc làm
                    {/* Feather icon chevron-right */}
                    <IconChevronsRight className='ml-1 h-[20px] w-[20px]' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-light-grey min-vh-main pb-[100px]'>
          <div className='icontainer'>
            <div className='pd-[100px] pt-[80px]'>
              <div className='mb-[32px] flex flex-row items-center justify-between'>
                <h1 className=''>Bài viết nổi bật</h1>
                <a className='hyperlink flex items-center' href='#'>
                  Xem tất cả
                  <IconChevronsRight className='ml-1 h-[20px] w-[20px]' />
                </a>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <PostFrame
                  featured
                  title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                  content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                  link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
                />
                <div className='blog-other grid grid-cols-2 gap-4'>
                  <PostFrame
                    title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                    content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                    link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
                  />
                  <PostFrame
                    title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                    content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                    link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
                  />
                  <PostFrame
                    title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                    content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                    link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
                  />
                  <PostFrame
                    title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
                    content='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals...'
                    link='https://itviec.com/blog/itviec-it-salary-report-2023-2024-press-release?itm_campaign=featuredpost&amp;itm_medium=footer&amp;itm_source=itviec.com'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light-grey'>
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
                    <p className='normal-text pe-none mt-[5px]'>
                      Ít nhưng mà chất
                    </p>
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
                    <a
                      target='_blank'
                      rel='canonical'
                      href='/dich-vu-goi-y-ung-vien'
                    >
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
                    <a
                      target='_blank'
                      rel='canonical'
                      href='/dich-vu-goi-y-ung-vien'
                    >
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
                    <a
                      target='_blank'
                      rel='canonical'
                      href='/dich-vu-goi-y-ung-vien'
                    >
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
        </div>
      </section>
    </main>
  );
}
