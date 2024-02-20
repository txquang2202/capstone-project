'use client';
import Navigation from '../navbar';
import Link from 'next/link';
import Footer from '../footer';
import React, { useRef } from 'react';
import ClipboardJS from 'clipboard';
import AuthorInfo from './author';
import RelatedArticles from './relatedArticles';

export default function DetailPage() {
  //   const currentURL = window.location.href;
  const textRef = useRef<HTMLInputElement>(null);

  // Coppy ID
  const handleCopyClick = () => {
    if (textRef.current) {
      // Initialize ClipboardJS
      const clipboard = new ClipboardJS('.copy-button', {
        text: () => textRef.current?.innerText ?? '',
      });

      // Destroy ClipboardJS instance after copying
      clipboard.on('success', () => {
        clipboard.destroy();
        window.alert('Text copied to clipboard!');
      });

      // Handle error
      clipboard.on('error', (e) => {
        clipboard.destroy();
        console.error('Copy failed:', e.action);
      });
    }
  };

  return (
    <div className='scroll-smooth bg-[#f2f2f2] focus:scroll-auto'>
      <Navigation selected='blog' />
      <main className=''>
        <div className='mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8'>
          <p className='text-base font-medium text-gray-400'>
            ITviec Blog{' '}
            {tags.map((tag, index) => (
              <span key={index}>/ {tag} </span>
            ))}
          </p>
        </div>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
          {/* left */}
          <div className='col-span-2 rounded-md  border border-gray-200 bg-white'>
            <div className='mx-auto max-w-4xl px-12 py-8'>
              {/* content */}
              <div className='mb-12'>
                <div className=' font-medium italic text-gray-400 '>
                  <p>Ngày xuất bản: 01/02/2024</p>
                  <p>Ngày cập nhật: 01/02/2024</p>
                </div>
                <h2 className='mb-8 mt-4 text-4xl font-bold text-red-500'>
                  Bí quyết xây dựng quy trình tuyển dụng giúp tăng tỷ lệ thành
                  công
                </h2>
                <h3 className='mb-10'>NỘI DUNG CHÍNH</h3>
                <figure className='mb-10'>
                  <img
                    src='https://itviec.com/blog/wp-content/uploads/2024/01/quy-trinh-tuyen-dung-blog-vippro-700x368.png'
                    alt=''
                    className='w-full transform cursor-pointer bg-cover bg-center transition duration-300 ease-in-out hover:brightness-90'
                  />
                </figure>
                <div className='prose lg:prose-xl text-xl leading-9'>
                  <p className='mb-8  font-medium italic'>
                    Việc xây dựng một quy trình tuyển dụng chỉ dựa vào nhu cầu
                    tìm kiếm nhân tài của công ty mà không cân nhắc hành vi tìm
                    kiếm và ứng tuyển của ứng viên IT thường sẽ xa rời thực tế
                    và khó đạt được hiệu quả. Bài viết sau đây sẽ gợi ý cho
                    những nhà tuyển dụng IT các bí quyết xây dựng quy trình
                    tuyển dụng dựa trên chính hành vi tìm việc hiện nay của
                    chuyên gia IT tại Việt Nam.
                  </p>
                  <p>Đọc bài viết sau đây sẽ giúp nhà tuyển dụng hiểu rõ:</p>
                  <ul className='list-disc p-6'>
                    <li>
                      Xu hướng tìm việc và ứng tuyển của các chuyên gia IT hiện
                      nay
                    </li>
                    <li>
                      Lý do khiến ứng viên IT quyết định ứng tuyển công việc mới
                      (bên cạnh mức lương)
                    </li>
                    <li>
                      Nhà tuyển dụng nên đưa ra lời đề nghị công việc với mức
                      lương như thế nào
                    </li>
                  </ul>
                  <p>
                    Từ đó, nhà tuyển dụng có thể xây dựng quy trình tuyển dụng
                    phù hợp hơn với hành vi tìm việc, đáp ứng mong đợi nghề
                    nghiệp của chuyên gia IT để tăng tỷ lệ tuyển dụng thành
                    công.
                  </p>
                </div>
              </div>
              <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
              {/* share */}
              <div className='flex flex-col items-center justify-center py-8'>
                <div className='flex flex-row flex-wrap items-center justify-center gap-4'>
                  <h4 className='font-medium text-red-500'>
                    Chia&nbsp;sẻ&nbsp;bài&nbsp;viết
                  </h4>
                  <div className='items-cente flex flex-row gap-x-1'>
                    <Link
                      href={'#!'}
                      className='transition duration-300 hover:-translate-y-1'
                    >
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='20' fill='#3B5998' />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                    <Link
                      href={'#!'}
                      className='transition duration-300 hover:-translate-y-1'
                    >
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='20' fill='#1DA1F2' />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                    <Link
                      href={'#!'}
                      className='transition duration-300 hover:-translate-y-1'
                    >
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='20' fill='#3B5998' />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                    <Link
                      href={'#!'}
                      className='transition duration-300 hover:-translate-y-1'
                    >
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='20' fill='#1DA1F2' />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className='mt-4 flex flex-row items-stretch justify-between gap-x-2 rounded border bg-gray-200 px-4 py-3 text-lg'>
                  <p
                    className='max-w-[400px] overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-400'
                    ref={textRef}
                  >
                    http://localhost:3000/blog/detail-blog#!
                  </p>
                  <button
                    onClick={handleCopyClick}
                    className='copy-button ml-auto cursor-pointer self-start hover:text-red-700'
                  >
                    <svg
                      width='20px'
                      height='20px'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      transform='matrix(-1, 0, 0, 1, 0, 0)'
                    >
                      <g id='SVGRepo_bgCarrier' stroke-width='0' />

                      <g
                        id='SVGRepo_tracerCarrier'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />

                      <g id='SVGRepo_iconCarrier'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M15 1.25H10.9436C9.10583 1.24998 7.65019 1.24997 6.51098 1.40314C5.33856 1.56076 4.38961 1.89288 3.64124 2.64124C2.89288 3.38961 2.56076 4.33856 2.40314 5.51098C2.24997 6.65019 2.24998 8.10582 2.25 9.94357V16C2.25 17.8722 3.62205 19.424 5.41551 19.7047C5.55348 20.4687 5.81753 21.1208 6.34835 21.6517C6.95027 22.2536 7.70814 22.5125 8.60825 22.6335C9.47522 22.75 10.5775 22.75 11.9451 22.75H15.0549C16.4225 22.75 17.5248 22.75 18.3918 22.6335C19.2919 22.5125 20.0497 22.2536 20.6517 21.6517C21.2536 21.0497 21.5125 20.2919 21.6335 19.3918C21.75 18.5248 21.75 17.4225 21.75 16.0549V10.9451C21.75 9.57754 21.75 8.47522 21.6335 7.60825C21.5125 6.70814 21.2536 5.95027 20.6517 5.34835C20.1208 4.81753 19.4687 4.55348 18.7047 4.41551C18.424 2.62205 16.8722 1.25 15 1.25ZM17.1293 4.27117C16.8265 3.38623 15.9876 2.75 15 2.75H11C9.09318 2.75 7.73851 2.75159 6.71085 2.88976C5.70476 3.02502 5.12511 3.27869 4.7019 3.7019C4.27869 4.12511 4.02502 4.70476 3.88976 5.71085C3.75159 6.73851 3.75 8.09318 3.75 10V16C3.75 16.9876 4.38624 17.8265 5.27117 18.1293C5.24998 17.5194 5.24999 16.8297 5.25 16.0549V10.9451C5.24998 9.57754 5.24996 8.47522 5.36652 7.60825C5.48754 6.70814 5.74643 5.95027 6.34835 5.34835C6.95027 4.74643 7.70814 4.48754 8.60825 4.36652C9.47522 4.24996 10.5775 4.24998 11.9451 4.25H15.0549C15.8297 4.24999 16.5194 4.24998 17.1293 4.27117ZM7.40901 6.40901C7.68577 6.13225 8.07435 5.9518 8.80812 5.85315C9.56347 5.75159 10.5646 5.75 12 5.75H15C16.4354 5.75 17.4365 5.75159 18.1919 5.85315C18.9257 5.9518 19.3142 6.13225 19.591 6.40901C19.8678 6.68577 20.0482 7.07435 20.1469 7.80812C20.2484 8.56347 20.25 9.56458 20.25 11V16C20.25 17.4354 20.2484 18.4365 20.1469 19.1919C20.0482 19.9257 19.8678 20.3142 19.591 20.591C19.3142 20.8678 18.9257 21.0482 18.1919 21.1469C17.4365 21.2484 16.4354 21.25 15 21.25H12C10.5646 21.25 9.56347 21.2484 8.80812 21.1469C8.07435 21.0482 7.68577 20.8678 7.40901 20.591C7.13225 20.3142 6.9518 19.9257 6.85315 19.1919C6.75159 18.4365 6.75 17.4354 6.75 16V11C6.75 9.56458 6.75159 8.56347 6.85315 7.80812C6.9518 7.07435 7.13225 6.68577 7.40901 6.40901Z'
                          fill='#f00505'
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='mt-6 flex flex-row items-center gap-3'>
                <h4>TAG:</h4>
                <button className='self-start'>
                  {tags.map((tag, index) => (
                    <a
                      key={index}
                      href='#!'
                      className='mr-2 inline-block rounded-full border border-gray-500 p-2 text-center  text-xs hover:border-red-500 hover:text-red-500'
                    >
                      {tag}
                    </a>
                  ))}
                </button>
              </div>
              <hr className='mt-5 h-[1px] w-full border-none bg-gray-200' />
              {/* author */}
              <AuthorInfo
                name='Tuong Uyen'
                role='Senior Content Writer'
                imageUrl='https://itviec.com/blog/wp-content/uploads/2022/10/tuong-uyen-profile-picture-200x198.jpg'
                description='Có hơn 3 năm kinh nghiệm chuyên thực hiện các phỏng vấn chuyên sâu về kiến thức công nghệ thông tin với nhiều chuyên gia IT thuộc nhiều lĩnh vực IT hấp dẫn như Software Development, Game, Blockchain, Data, RPA,… Với niềm yêu thích và nghiên cứu về những kiến thức nền tảng mà mọi người kỹ sư công nghệ thông tin nào cũng cần phải nắm vững, như C++, Framework Front-End, Web, Mobile, Database,…, Uyên mang đến đa dạng những bài viết kiến thức IT cho mọi người đọc từ cơ bản đến nâng cao. Có hơn 3 năm kinh nghiệm chuyên thực hiện các phỏng vấn chuyên sâu về kiến thức công nghệ thông tin với nhiều chuyên gia IT'
                url='#!'
              />
            </div>
          </div>
          {/* right */}
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            {/* related articles */}
            <div className='sticky top-0'>
              <div className=' rounded-md border border-gray-200 bg-white px-4 py-3'>
                <RelatedArticles />
              </div>
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
                    <button className='rounded bg-red-600 px-2 py-3 text-center text-lg font-semibold text-white hover:bg-red-700'>
                      Đăng kí nhận tin
                    </button>
                    <p className='text-center text-sm text-white'>
                      Bằng việc cung cấp địa chỉ email, bạn đồng ý với các Điều{' '}
                      {''}
                      <span className='underline underline-offset-1'>
                        khoản dịch vụ
                      </span>{' '}
                      và {''}
                      <span className='underline underline-offset-1'>
                        Chính sách quyền riêng tư
                      </span>{' '}
                      của ITviec liên quan đến thông tin riêng tư của bạn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const tags = ['Dành cho nhà tuyển dụng IT', 'Xu hướng tuyển dụng IT'];
