import React from 'react';

import { useLocale } from '@/locale';

function Delete() {
  const { t } = useLocale();

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
          <a
            href='#!'
            className='border-red text-red hover:bg-white-red mt-6 rounded-md border px-6 py-3 text-center font-bold'
          >
            {t('Delete your account')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Delete;
