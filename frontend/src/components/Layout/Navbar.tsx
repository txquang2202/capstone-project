'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useEffect, useState } from 'react';

import { IconChevronDown } from '@/components/Icons';
import { routes } from '@/configs/router';
import { STICKY_NAV_OFFSET } from '@/constant/config';
import { cn } from '@/lib/classNames';
import { useLocale } from '@/locale';

import { AppLink } from '../AppLink';
import UserMenu from './UserMenu';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const [stickyClass, setStickyClass] = useState('fixed');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > STICKY_NAV_OFFSET
        ? setStickyClass('fixed shrink')
        : setStickyClass('fixed');
    }
  };

  const { locale: _locale } = useLocale();

  const onChangeLang = (lang: string) => {
    if (!pathname) return;
    const query = searchParams?.toString();
    const nextPath = pathname.startsWith(`/${params.lang}`)
      ? pathname.replace(`/${params.lang}`, '')
      : pathname;

    router.replace(`/${lang}/${nextPath}${query ? '?' + query : ''}`);
  };

  return (
    <header className='header'>
      <nav
        className={`navbar navbar-expand-lg ${stickyClass} left-0 right-0 z-10`}
      >
        <div className='bg-header-gradient icontainer-header flex w-full items-center'>
          <AppLink href={routes.home.path}>
            <Image
              alt='logo'
              src='/images/logo.png'
              className='logo-itviec me-8'
              width={108}
              height={40}
            />
          </AppLink>
          <div className='navbar-collapse'>
            <ul className='navbar-nav me-auto items-center gap-2'>
              <li className='nav-item main-menu relative'>
                <Link href='/it-jobs/all' className='flex items-center px-2'>
                  Việc Làm IT
                  <IconChevronDown />
                </Link>
              </li>
              <li className='nav-item main-menu relative'>
                <Link href='/companies' className='flex items-center px-2'>
                  Top Công ty IT
                  <IconChevronDown />
                </Link>
              </li>
              <li className='nav-item main-menu relative'>
                <Link href='/blog' className='flex items-center px-2'>
                  Blog
                  <IconChevronDown />
                </Link>
              </li>
            </ul>

            <ul className='navbar-nav ms-auto items-center gap-6'>
              <li className='nav-item main-menu'>
                <Link href={routes.employer.path} className='text-it-white'>
                  Nhà Tuyển Dụng
                </Link>
              </li>
              <UserMenu />

              <li className='nav-item'>
                <div className='switch-language flex'>
                  <a
                    onClick={() => onChangeLang('en')}
                    className={cn('cursor-pointer', {
                      'text-it-white': _locale === 'en',
                      'text-dark-grey': _locale !== 'en',
                    })}
                  >
                    EN
                  </a>
                  <div className='vr text-it-white mx-2 self-center' />
                  <a
                    onClick={() => onChangeLang('vi')}
                    className={cn('cursor-pointer', {
                      'text-it-white': _locale === 'vi',
                      'text-dark-grey': _locale !== 'vi',
                    })}
                  >
                    VI
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
