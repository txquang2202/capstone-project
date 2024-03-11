import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect } from 'react';

import {
  IconBriefcase,
  IconChevronDown,
  IconLogOut,
  IconSettings,
  IconUser,
} from '@/components/Icons';
import useAuthData from '@/hooks/useAuthData';

import { AppLink } from '../AppLink';

const UserMenu = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (
      status != 'loading' &&
      session &&
      session?.error === 'RefreshAccessTokenError'
    ) {
      signOut({ callbackUrl: '/' });
    }
  }, [session, status]);
  const authUser = useAuthData();

  const keycloakSessionLogOut = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'GET' });
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  if (status === 'loading') return null;

  return session && authUser ? (
    <li className='nav-item main-menu relative'>
      <div className='user-avatar-wrapper flex items-center'>
        <div className='sign-in-user-avatar'>
          <img
            className='user-avatar'
            src={authUser.imgUrl}
            width={32}
            height={32}
            alt=''
          />
        </div>
        <div className='inline-flex items-end'>
          <span className='text-it-white ms-3'>{session.user?.email}</span>
          <IconChevronDown className='icon-md ms-1' />
        </div>
      </div>
      <div className='bg-it-black sub-menu vbit-menu absolute top-full'>
        <ul className='bg-it-black relative m-0 p-0' data-controller='sub-menu'>
          <li className='menu-title small-text category px-4'>
            <Link
              className='text-reset flex items-center'
              data-controller='utm-tracking'
              href='/profile-cv'
            >
              <IconUser className='icon-md' />
              <span className='ms-2'>Hồ sơ và CV</span>
            </Link>
          </li>
          <li className='menu-title small-text category px-4'>
            <Link
              className='text-reset flex items-center'
              data-controller='utm-tracking'
              href='/my-jobs'
            >
              <IconBriefcase className='icon-md' />
              <span className='ms-2'>Việc làm của tôi</span>
            </Link>
          </li>

          <li className='menu-title small-text category px-4'>
            <Link
              className='text-reset flex items-center'
              data-controller='utm-tracking'
              href='/settings'
            >
              <IconSettings className='icon-md' />
              <span className='ms-2'>Cài đặt</span>
            </Link>
          </li>
          <li className='menu-title small-text category px-4'>
            <Link
              className='text-reset flex items-center'
              rel='nofollow'
              href='#'
              onClick={(e) => {
                e.preventDefault();
                keycloakSessionLogOut().then(() => {
                  signOut({ callbackUrl: '/' });
                });
              }}
            >
              <IconLogOut className='icon-md' />
              <span className='ms-2'>Đăng Xuất</span>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  ) : (
    <li className='nav-item'>
      <AppLink
        hrefLang='vi-VN'
        rel='nofollow'
        className='text-it-white'
        href='#'
        onClick={(e) => {
          e.preventDefault();
          signIn('keycloak');
        }}
      >
        Đăng Nhập/Đăng Ký
      </AppLink>
    </li>
  );
};

export default UserMenu;
