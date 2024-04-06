'use client';

import { useMutation } from '@apollo/client';
import { signOut } from 'next-auth/react';
import React from 'react';

import { SOFT_DELETE_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';

function Delete() {
  const { authUser } = useAuthData();
  const { t } = useLocale();
  const [softDeleteUser] = useMutation(SOFT_DELETE_USER);

  const handleDelete = async () => {
    try {
      await softDeleteUser({ variables: { deleteUserId: authUser?.id } });
      keycloakSessionLogOut().then(() => {
        signOut({ callbackUrl: '/' });
      });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const keycloakSessionLogOut = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'GET' });
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  const confirmDelete = () => {
    if (window.confirm(t('Are you sure you want to delete your account?'))) {
      handleDelete();
    }
  };

  return (
    <div className='rounded-md bg-[#ffff] shadow-md'>
      <div className='flex flex-row flex-wrap justify-start px-6 pb-10 pt-6'>
        <h3>{t('Delete Account')}</h3>
        <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
        <div className='mt-4 flex w-full flex-row  flex-wrap items-center'>
          <p>
            {t(
              'Account deletion is a permanent action and cannot be undone. If you are deleting your account due to an excessive email notifications, you can unsubscribe from emails'
            )}{' '}
            <span className='text-blue'>{t('here')}</span>.
          </p>
          <button
            onClick={confirmDelete}
            className='border-red text-red hover:bg-white-red mt-6 rounded-md border px-6 py-3 text-center font-bold'
          >
            {t('Delete your account')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
