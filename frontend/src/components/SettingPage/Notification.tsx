import React from 'react';

import { useLocale } from '@/locale';

import Option from './Option';

function Notification() {
  const { t } = useLocale();

  return (
    <div className='rounded-md bg-[#ffff] shadow-md'>
      <div className='flex flex-row flex-wrap justify-start px-6 pb-20 pt-6'>
        <h3>{t('Notifications')}</h3>
        <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
        <div className='mt-4 flex w-full flex-row  flex-wrap items-start'>
          <div className='basis-2/5'>
            <h4>{t("Don't receive invitations from")}:</h4>
            <h6 className='mt-2'>{t('Maximum 5 employers')}</h6>
          </div>
          <div className='basis-3/5'>
            <Option />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
