'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gradient-to-l from-[#54151c] to-[#121212]'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6'>
          <div className='col-span-2 flex w-11/12 flex-col gap-y-3'>
            <img
              src='https://itviec.com/blog/wp-content/uploads/2020/12/blog_logo_retina.png'
              alt='logo'
              className='h-[30px] w-[128px]'
            />
            <input
              className='focus:shadow-outline  appearance-none rounded border  py-3  leading-tight text-gray-700 shadow focus:outline-none'
              type='email'
              id='email'
              placeholder='Nhập email của bạn'
            />
            <button className='rounded bg-red-600 px-2 py-2.5 text-center text-lg font-semibold hover:bg-red-700'>
              Đăng kí nhận tin
            </button>
            <p>
              Bằng việc cung cấp địa chỉ email, bạn đồng ý với các Điều {''}
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
          <div className='space-y-2'>
            <h4>Việc làm IT</h4>
            <ul className='space-y-2 text-gray-400 '>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Việc làm IT theo kỹ năng</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Việc làm IT theo vị trí</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Việc làm IT theo khu vực</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4>Chuyện IT</h4>
            <ul className='space-y-2 text-gray-400 '>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Chuyện IT theo vị trí</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Chia sẻ chuyện IT</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4>Nhà tuyển dụng IT</h4>
            <ul className='space-y-2 text-gray-400 '>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Công ty IT tốt nhất Việt&nbsp;Nam</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Review công ty</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Đăng tuyển ngay!</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4>Về ITviec</h4>
            <ul className='space-y-2 text-gray-400 '>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Thông cáo báo chí</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>Liên hệ: blog@itviec.com</Link>
              </li>
              <li className='flex items-center gap-x-1 transition duration-200 hover:text-gray-100'>
                <Link href={'#!'}>
                  <svg
                    fill='#ffffff'
                    width='25px'
                    height='25px'
                    viewBox='-5.5 0 32 32'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0' />

                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />

                    <g id='SVGRepo_iconCarrier'>
                      <title>facebook</title>
                      <path d='M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z' />
                    </g>
                  </svg>
                </Link>
                <Link href={'#!'}>
                  <svg
                    fill='#ffffff'
                    width='34px'
                    height='34px'
                    viewBox='0 0 32.00 32.00'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='#ffffff'
                    stroke-width='0.00032'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0' />

                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke='#CCCCCC'
                      stroke-width='0.064'
                    />

                    <g id='SVGRepo_iconCarrier'>
                      <path d='M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z' />
                    </g>
                  </svg>
                </Link>
                <Link href={'#!'}>
                  <svg
                    fill='#ffffff'
                    height='18px'
                    width='18px'
                    version='1.1'
                    id='Layer_1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='-143 145 512 512'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0' />

                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />

                    <g id='SVGRepo_iconCarrier'>
                      <path d='M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z' />
                    </g>
                  </svg>
                </Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link
                  href={
                    'https://www.dmca.com/Protection/Status.aspx?ID=d08d3aba-304f-4fe3-bef1-27d258922872&refurl=https://itviec.com/blog/'
                  }
                >
                  <img
                    src='https://images.dmca.com/Badges/dmca_protected_sml_120ac.png?ID=https://www.dmca.com/Protection/Status.aspx?ID=d08d3aba-304f-4fe3-bef1-27d258922872'
                    alt='logo'
                    className='h-[26px] w-[108px]'
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
