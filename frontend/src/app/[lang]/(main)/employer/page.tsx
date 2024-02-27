'use client';

import { Button } from '@/components/Button';
import { IconArrowRightCircle } from '@/components/Icons';

export default function EmployerPage() {
  return (
    <main className='employer-landing-container'>
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
                chúng tôi có thể giúp bạn tiếp cận và tuyển dụng những ứng viên
                IT tốt nhất.
              </p>

              <Button intent='primary' size='xl' className='contact-now-btn'>
                Liên hệ ngay
              </Button>
              <div className='paragraph mt-8 flex items-center'>
                <p className='text-dark-grey me-1'>
                  Đã có tài khoản Khách hàng?
                </p>
                <a
                  className='text-it-white text-decoration-underline'
                  target='_blank'
                  href='/customer/login'
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='itviec-different-container px-0 px-5 pt-[120px]'>
        <div className='text-center'>
          <h1 className='lg-title'>Điều gì tạo nên sự khác biệt ở ITviec?</h1>
          <p className='normal-text paragraph pt-6'>
            ITviec là trang tuyển dụng và cơ sở dữ liệu hàng đầu về các chuyên
            gia IT tại Việt Nam.
          </p>
        </div>
        <div className='content-wrapper flex items-center justify-center px-5 pb-[120px] pt-[88px]'>
          <div className='content-box border-radius-large relative mt-0 mt-4 flex flex-col items-center justify-center bg-white'>
            <p className='large-number text-it-red font-bold'>10,000+</p>
            <p className='normal-text mt-4'>Công ty và Doanh nghiệp IT</p>
            <img
              alt='first-hand'
              className='absolute'
              src='https://itviec.com/assets/employer_landing/first-hand-8f9978db44dfb1095793ff239fa072e94bfd1d74d7b62a875d7f69eba997b911.svg'
            />
          </div>
          <div className='content-box border-radius-large relative mx-7 mt-0 mt-4 flex flex-col items-center justify-center bg-white'>
            <p className='large-number text-it-red font-bold'>1,500,000+</p>
            <p className='normal-text mt-4'>Hồ sơ đã gửi đến Nhà tuyển dụng</p>
            <img
              alt='first-hand'
              className='absolute'
              src='https://itviec.com/assets/employer_landing/second-hand-ef88cbd609f610ad98826b198a83feb349b8896a396f114c31721640592f6698.svg'
            />
          </div>
          <div className='content-box border-radius-large relative mt-0 mt-4 flex flex-col items-center justify-center bg-white'>
            <p className='large-number text-it-red font-bold'>300,000+</p>
            <p className='normal-text mt-4'>Hồ sơ Ứng viên kinh nghiệm cao</p>
            <img
              alt='first-hand'
              className='absolute'
              src='https://itviec.com/assets/employer_landing/third-hand-4285467762b4dd431d96729f58e05928f8b304f711ce0d683660648ebd294f36.svg'
            />
          </div>
        </div>
      </section>
      <section className='hight-value-services-container px-5 py-[120px]'>
        <div className='icontainer'>
          <h1 className='lg-title text-it-white text-center'>
            Dịch vụ chất lượng cao dành cho Nhà tuyển dụng IT
          </h1>
          <div className='flex-box-wrapper pb-13 mt-12 mt-4 bg-white px-6 py-6 pe-12 ps-12 pt-12'>
            <div className='flex-row-reverse lg:flex lg:items-center'>
              <div className='flex-1 justify-center lg:flex'>
                <img
                  className='large-pic w-full'
                  alt=''
                  src='https://itviec.com/assets/employer_landing/job-posting-15-30ceaa97f37fd97afb7dabc2c5ef6fe5702b78faf0c3da8aedb5d7d64b274a54.png'
                />
              </div>
              <div className='flex-1'>
                <h1 className='py-0'>Đăng tin tuyển dụng</h1>
                <p className='normal-text parapraph text-rich-grey mt-4'>
                  Đăng tuyển vị trí công việc IT, dễ dàng quản lý hồ sơ ứng viên
                  với giao diện trực quan, đội ngũ hỗ trợ, và công cụ mạnh mẽ từ
                  ITviec
                </p>
                <div className='mt-8 lg:flex'>
                  <div className='job-posting-content-box mb-4 me-4 flex flex-1 p-6'>
                    <img
                      alt=''
                      src='https://itviec.com/assets/employer_landing/opportunities-a53edbeb973cfeaa459e920b7a4562354aa02a1c83a53150cf8ebf17aaa7ce57.svg'
                    />
                    <p className='parapraph ms-4 mt-4'>
                      Gia tăng cơ hội để tiếp cận ứng viên IT chất lượng từ
                      ITviec
                    </p>
                  </div>
                  <div className='job-posting-content-box flex flex-1 p-6'>
                    <img
                      alt=''
                      src='https://itviec.com/assets/employer_landing/right-skill-be1892ff9d11b80aeab90527abe6b19cfb855ab95fbcc9b7bc75c89184353bfd.svg'
                    />
                    <p className='parapraph ms-4 mt-4'>
                      Thu hút ứng viên phù hợp với yêu cầu về kỹ năng IT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-box-wrapper pb-13 mt-8 bg-white px-6 py-12 py-6 pe-8 ps-12 pt-12'>
            <div className='flex-row-reverse lg:flex lg:items-center'>
              <div className='justify-center lg:flex'>
                <img
                  className='large-pic w-full'
                  alt=''
                  src='https://itviec.com/assets/employer_landing/employer-branding-15-9901407b309ba5b978b453490ba825d6e1c6c82c488649032f98840cd14eed04.png'
                />
              </div>
              <div className='flex-1'>
                <h1 className='py-0'>Thương hiệu tuyển dụng</h1>
                <p className='normal-text parapraph text-rich-grey mt-4'>
                  Nâng cao nhận diện thương hiệu của Nhà tuyển dụng, tiếp cận
                  các chuyên gia IT trên ITviec qua các điểm chạm đặc biệt, và
                  kết nối với các ứng viên IT hàng đầu tại Việt Nam
                </p>
                <div className='mt-8'>
                  <div className='aim-content-box imb-4 flex items-start p-6 lg:flex-row'>
                    <img
                      alt=''
                      src='https://itviec.com/assets/employer_landing/first-employer-branding-974416a3d60028453bad0cad115f6ab42ea0736b117aba05e0816b1d49caf93b.svg'
                    />
                    <div className='ms-4'>
                      <p className='normal-text font-semibold'>
                        Nhà tuyển dụng hàng đầu
                      </p>
                      <p className='text-rich-grey mt-2'>
                        Xuất hiện với vị trí công ty IT nổi bật hàng đầu tại
                        Việt Nam
                      </p>
                    </div>
                  </div>
                  <div className='aim-content-box flex items-start p-6 lg:flex-row'>
                    <img
                      alt=''
                      src='https://itviec.com/assets/employer_landing/second-employer-branding-970e0278afc18f58c8c7952e73f33e2288e18f92cf9a7709d8fddccd5749bbe8.svg'
                    />
                    <div className='ms-4'>
                      <p className='normal-text font-semibold	'>
                        Nhà tuyển dụng nổi bật
                      </p>
                      <p className='text-rich-grey mt-2'>
                        Tăng cường xây dựng thương hiệu nhà tuyển dụng đến với
                        những nhân tài IT hàng đầu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <h3 className='text-it-white pb-5 text-center'>
            Trải nghiệm dịch vụ của ITviec ngay hôm nay
          </h3>
          <div className='flex justify-center'>
            <Button intent='primary' size='xl' className='contact-now-btn'>
              Liên hệ ngay
            </Button>
          </div>
        </div>
      </section>
      <section className='top-employers-container pb-25 px-5 py-[120px] pt-16'>
        <div className='icontainer'>
          <div className='text-center'>
            <h1 className='lg-title'>Top Công ty hàng đầu tại ITviec</h1>
            <p className='paragraph pb-12 pt-6'>
              Nhà tuyển dụng và đối tác của chúng tôi bao gồm các công ty IT
              hàng đầu, và các công ty khởi nghiệp sáng tạo
            </p>
            <div className='top-employers-wrapper'>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/bosch-global-software-technologies-company-limited'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXBSSkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c842bcc876e105075b499085436333a814a0540b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/BOSCH_TOP_RGB.png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/nab-innovation-centre-vietnam'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo.jpg'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/abbank'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOExhSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d257e70c6585afdab6d5516fdec5419a75319c18/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo.png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/hdbank'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzh1REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ce285453891883a82df371f1823777ed0ab75cac/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/hdbank-logo.png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/renesas-design-vietnam'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK0VuREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c04a0fac2565beb04ca169d50f886f7e78c9573c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/renesas-design-vietnam-logo.jpg'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/hybrid-technologies'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpjRlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6c522fb1d6bbcea4ecc14fa1b08837bde132d324/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/avatar-10-10.jpg'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/money-forward-vietnam-co-ltd'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOVVIRFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1ae7acc317bfb2f261c8b580725af2d56ae34b7e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/money-forward-vi-t-nam-logo.png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/lg-electronics-development-vietnam-lgedv'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM3d3REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--61527e04af1870bf7e9858df649b2a613e1fad9b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/lg-development-center-vietnam-logo.png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/simpson-strong-tie-vietnam'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM1BsR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1f450cebddfafb93bcdd4c6b4b50d5a6e3f092d8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/Logo_SST_RGB.png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/hcl-vietnam-company-limited'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNzBFTEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d80b2532befaad660a67a0695a50ddd68a06d309/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/180x180.png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/ngan-hang-a-chau-acb'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2ZGR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cfdeddf0aec7ca8b02d0e13e969b9aed22aee626/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/download.png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/gft-technologies-vietnam'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBODhWT1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cd0c01b5c1c93dc558af28e8f06efe739ae08c7e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/GFT_Logo_300dpi.jpg'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/dek-technologies'
                >
                  <img
                    alt=''
                    className='employer-logo h-full w-full bg-white'
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkZHUGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--66c4982be85ebf7ffab2649aec630744bd4ec47c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/DEK-anEndavaCompany-Dark%20(2).png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/andpad-vietnam-co-ltd'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOVNQSmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5a3340af11521a7e1f7d84f1ff2d0aee68a6b6be/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/Screen%20Shot%202022-04-05%20at%2012.11.03%20PM%20-%20Thanh%20Nguyen%20(1).png'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/viettel-group'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN09SR3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8116cf4b23cb755b3b556d410e98ed210b2f68c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/logo%20Viettel.JPG'
                  />
                </a>
              </div>
              <div className='border-radius-large flex items-center justify-center bg-white'>
                <a
                  target='_blank'
                  data-controller='utm-tracking'
                  href='/nha-tuyen-dung/panasonic-vietnam-group-panasonic-r-d-center-vietnam-prdcv'
                >
                  <img
                    className='employer-logo h-full w-full bg-white'
                    alt=''
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWJ1R2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d0aff84848fa56085dca2a499011eb6e49b58fd1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/Logo-min.png'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='employer-contact-container'>
        <div className='icontainer px-5 py-[120px]'>
          <div className='text-it-white'>
            <div className='lg-title'>Tìm kiếm Nhân tài IT phù hợp</div>
            <p className='normal-text pb-16 pt-6'>
              Để lại thông tin liên hệ để nhận tư vấn từ Phòng Chăm sóc Khách
              hàng của ITviec.
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
    </main>
  );
}
