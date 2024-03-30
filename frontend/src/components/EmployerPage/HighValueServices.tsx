'use client';

import { Button } from '@/components/Button';

const EmployerHighValueServices = () => {
  return (
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
                    Gia tăng cơ hội để tiếp cận ứng viên IT chất lượng từ ITviec
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
                Nâng cao nhận diện thương hiệu của Nhà tuyển dụng, tiếp cận các
                chuyên gia IT trên ITviec qua các điểm chạm đặc biệt, và kết nối
                với các ứng viên IT hàng đầu tại Việt Nam
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
                      Xuất hiện với vị trí công ty IT nổi bật hàng đầu tại Việt
                      Nam
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
          <a href='#contactme'>
            <Button intent='primary' size='xl' className='contact-now-btn'>
              Liên hệ ngay
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmployerHighValueServices;
