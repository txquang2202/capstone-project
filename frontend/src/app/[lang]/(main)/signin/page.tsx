'use client';

import Image from 'next/image';

import { Button } from '@/components/Button';
import { IconCheck } from '@/components/Icons';
import { useLocale } from '@/locale';

export default function Page() {
  const { t } = useLocale();

  return (
    <div className='mx-auto max-w-[1340px] py-2.5'>
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
          <div
            className='text-rich-grey mb-6 text-sm'
            dangerouslySetInnerHTML={{
              __html: t('termsOfServiceAndPrivacyPolicyText'),
            }}
          ></div>
          <Button
            size='large'
            intent='secondary'
            icon={
              <Image
                alt='google'
                src='/images/google.png'
                width={30}
                height={30}
              />
            }
            className='w-full'
          >
            {t('signinWithText', ['Email'])}
          </Button>
        </div>
        <div className='w-2/3'>
          <div className='mb-4 text-[22px] font-bold leading-8'>
            {t('signinTitleText')}
          </div>
          <ul>
            {(
              t('signinContentText', undefined, {
                returnObject: true,
              }) as unknown as Array<string>
            )?.map((value, index) => (
              <li key={index} className='mb-4 flex items-center gap-1'>
                <IconCheck size={20} color='var(--success-color)' />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
