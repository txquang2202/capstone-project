'use client';

import { TextInput } from '@mantine/core';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { useLocale } from '@/locale';

export default function Page() {
  const { t } = useLocale();

  return (
    <div className='mx-auto mb-[100px] max-w-[960px] px-[30px] py-2.5'>
      <div className='flex items-center gap-2 py-6 text-xl font-bold'>
        {t('welcomeToText')}
        <Image
          alt='logo'
          src='/images/logo-black.png'
          width={108}
          height={40}
        />
      </div>
      <div className='flex gap-[10%]'>
        <div className='w-1/2'>
          <div className='mb-6 text-[28px] font-bold'>
            {`${t('forgotPasswordText')}?`}
          </div>
          <div className='flex flex-col gap-4'>
            <TextInput
              withAsterisk
              size='md'
              label={t('yourEmailText')}
              placeholder={t('yourEmailText')}
            />
            <Button>{t('resetPasswordText')}</Button>
            <div className='text-center uppercase'>{t('orText')}</div>
            <Button intent='secondary'>{t('signinText')}</Button>
          </div>
        </div>
        <div className='flex w-1/2 items-center justify-center'>
          <Image
            alt='image'
            src='/images/forgot-password.png'
            width={320}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
