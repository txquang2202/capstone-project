import Image from 'next/image';
import React, { ReactNode } from 'react';

import { style as Roboto } from '@/components/Font/Roboto';

import { AppLink } from '../AppLink';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='font-roboto flex min-h-screen flex-col'>
      <nav
        className='navbar navbar-expand-lg navbar-dark bg-dark py-2'
        data-controller='customer-header'
      >
        <div className='flex items-center justify-between px-2.5'>
          <AppLink className='navbar-brand' href='/admin'>
            <Image
              alt='logo'
              src='https://itviec.com/assets/admin/logo-efe3c0bc0e926dd914aa81426736de8f47ac40181bac8aef00264436d836a6ff.svg'
              width={120}
              height={30}
            />
          </AppLink>
          <button
            className='navbar-toggler'
            data-bs-target='#navbarSupportedContent'
            data-bs-toggle='collapse'
            type='button'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='navbar-collapse collapse'
            id='navbarSupportedContent'
          ></div>
        </div>
      </nav>
      {children}
      <footer className='bg-dark mt-auto py-3 text-[#929497]'>
        <div className='px-2.5'>
          <div className='d-flex flex-sm-row flex-column flex items-center justify-between'>
            <div className='py-2'>
              <div className='fw-medium'>
                Want to post a job but have not had an Admin Account yet?
                Contact us at:
              </div>
              <br />
              Ho Chi Minh: (+84) 977 460 519 - Ha Noi: (+84) 983 131 351 -
              Email: love@itviec.com
            </div>
            <div className='py-2'>
              <ul className='list-unstyled'>
                <li>Copyright © IT VIEC JSC</li>
                <li>Tax code: 0312192258</li>
                <li>
                  <a
                    target='_blank'
                    className='text-reset'
                    href='https://itviec.com/blog/faq-cac-cau-hoi-thuong-gap/'
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Roboto />
    </div>
  );
};

export default Layout;
