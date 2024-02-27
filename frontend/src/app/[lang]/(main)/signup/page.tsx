'use client';

import { TextInput } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';

import { AppLink } from '@/components/AppLink';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { routes } from '@/configs/router';
import { useLocale } from '@/locale';

export default function Page() {
  const { t } = useLocale();
  const [check, setCheck] = useState(false);

  return (
    <div className='mx-[30px]'>
      <div className='mx-auto mb-[100px] max-w-[1340px] py-2.5'>
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
            <div className='text-[28px] font-bold'>
              {t('registerAccountText')}
            </div>
            <div className='my-4'>
              <Checkbox
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
              />
              <div
                className='text-rich-grey [&_a]:text-hyperlink mb-6 ml-3 inline'
                dangerouslySetInnerHTML={{
                  __html: t('termsOfServiceAndPrivacyPolicyText'),
                }}
              ></div>
            </div>
            <div className='flex flex-col gap-4'>
              <Button
                disabled={!check}
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
                {t('signupWithText', ['Google'])}
              </Button>
              <div className='flex items-center'>
                <span className='bg-silver-grey h-[1px] flex-1'></span>
                <span className='mx-2'>{t('orText')}</span>
                <span className='bg-silver-grey h-[1px] flex-1'></span>
              </div>
              <TextInput
                withAsterisk
                size='md'
                label={t('userNameText')}
                placeholder={t('userNameText')}
                classNames={{ label: 'mb-1' }}
              />
              <TextInput
                withAsterisk
                size='md'
                label={t('emailAddressText')}
                placeholder={t('emailAddressText')}
                classNames={{ label: 'mb-1' }}
              />
              <TextInput
                withAsterisk
                size='md'
                label={t('passwordText')}
                placeholder={t('passwordText')}
                classNames={{ label: 'mb-1' }}
              />
              <div className='mb-4 mt-2'>
                <Checkbox
                  checked={check}
                  onChange={(e) => setCheck(e.target.checked)}
                />
                <div
                  className='text-rich-grey [&_a]:text-hyperlink mb-6 ml-3 inline'
                  dangerouslySetInnerHTML={{
                    __html: t('agreeTermsOfServiceAndPrivacyPolicyText'),
                  }}
                ></div>
              </div>
              <Button>{t('signupWithText', ['Email'])}</Button>
              <div className='text-center'>
                {`${t('youHaveAnAccountText')} `}
                <AppLink
                  href={routes.signin.path}
                  className='normal-text hyperlink'
                >
                  {t('signinNowText')}
                </AppLink>
              </div>
            </div>
          </div>
          <div className='flex w-2/3 items-center justify-center'>
            <Image
              alt='image'
              src='/images/signup-image.png'
              width={320}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
