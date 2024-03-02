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
                <a href='/#' className='flex items-center px-2'>
                  Việc Làm IT
                  <IconChevronDown />
                </a>
              </li>
              <li className='nav-item main-menu relative'>
                <a href='/#' className='flex items-center px-2'>
                  Top Công ty IT
                  <IconChevronDown />
                </a>
              </li>
              <li className='nav-item main-menu relative'>
                <a href='/blog' className='flex items-center px-2'>
                  Blog
                  <IconChevronDown />
                </a>
              </li>
            </ul>
            {/* <div className='item-center ml-auto flex gap-6 text-base text-white'>
        <div>{`${t('signinText')}/${t('signupText')}`}</div>
        <div className='text-dark-grey flex items-center'>
          <span
            onClick={() => onChangeLang('en')}
            className={cn('cursor-pointer', {
              'text-white': _locale === 'en',
            })}
          >
            {t('enText')}
          </span>
          <span className='mx-2 h-4 w-[1px] bg-white'></span>
          <span
            onClick={() => onChangeLang('vi')}
            className={cn('cursor-pointer', {
              'text-white': _locale === 'vi',
            })}
          >
            {t('viText')}
          </span>
        </div>
      </div> */}
            <ul className='navbar-nav ms-auto items-center gap-6'>
              <li className='nav-item main-menu'>
                <Link href={routes.employer.path} className='text-it-white'>
                  Nhà Tuyển Dụng
                </Link>
              </li>
              <li className='nav-item'>
                <AppLink
                  hrefLang='vi-VN'
                  rel='nofollow'
                  className='text-it-white'
                  href={routes.signin.path}
                >
                  Đăng Nhập/Đăng Ký
                </AppLink>
              </li>
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
