'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  IconFacebookFill,
  IconLinkedinFill,
  IconYoutubeFill,
} from '@/components/Icons';

export default function Footer() {
  return (
    <footer className='bg-gradient-to-l from-[#54151c] to-[#121212]'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6'>
          <div className='col-span-2 flex w-11/12 flex-col gap-y-3'>
            <Image
              src='https://itviec.com/blog/wp-content/uploads/2020/12/blog_logo_retina.png'
              alt='logo'
              width={128}
              height={30}
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
              Bằng việc cung cấp địa chỉ email, bạn đồng ý với các Điều
              <span className='underline underline-offset-1'>
                khoản dịch vụ
              </span>{' '}
              và
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
                <Link href='#!'>Việc làm IT theo kỹ năng</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Việc làm IT theo vị trí</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Việc làm IT theo khu vực</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4>Chuyện IT</h4>
            <ul className='space-y-2 text-gray-400 '>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Chuyện IT theo vị trí</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Chia sẻ chuyện IT</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4>Nhà tuyển dụng IT</h4>
            <ul className='space-y-2 text-gray-400 '>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Công ty IT tốt nhất Việt&nbsp;Nam</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Review công ty</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Đăng tuyển ngay!</Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4>Về ITviec</h4>
            <ul className='space-y-2 text-gray-400 '>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Thông cáo báo chí</Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='#!'>Liên hệ: blog@itviec.com</Link>
              </li>
              <li className='flex items-center gap-x-1 transition duration-200 hover:text-gray-100'>
                <Link href='#!'>
                  <IconFacebookFill size={15} />
                </Link>
                <Link href='#!'>
                  <IconYoutubeFill size={15} />
                </Link>
                <Link href='#!'>
                  <IconLinkedinFill size={15} />
                </Link>
              </li>
              <li className='transition duration-200 hover:text-gray-100'>
                <Link href='https://www.dmca.com/Protection/Status.aspx?ID=d08d3aba-304f-4fe3-bef1-27d258922872&refurl=https://itviec.com/blog/'>
                  <Image
                    src='https://images.dmca.com/Badges/dmca_protected_sml_120ac.png?ID=https://www.dmca.com/Protection/Status.aspx?ID=d08d3aba-304f-4fe3-bef1-27d258922872'
                    alt='logo'
                    width={108}
                    height={26}
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
