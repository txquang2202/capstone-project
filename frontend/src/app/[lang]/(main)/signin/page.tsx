'use client';

import { TextInput } from '@mantine/core';
import Image from 'next/image';

import { AppLink } from '@/components/AppLink';
import { Button } from '@/components/Button';
import { IconCheck } from '@/components/Icons';
import { routes } from '@/configs/router';
import { useForm } from '@/hooks/useForm';
import { useLocale } from '@/locale';

type LoginForm = {
  username: string;
  password: string;
};

export default function Page() {
  const { t } = useLocale();
  const { fields, error, handleSubmit, onChangeField } = useForm<LoginForm>({
    defaultState: { username: '', password: '' },
    config: {
      username: { required: true },
      password: { required: true },
    },
  });

  const onSubmit = () => {
    console.log(fields);
  };

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
            <div
              className='text-rich-grey [&_a]:text-hyperlink mb-6 text-sm'
              dangerouslySetInnerHTML={{
                __html: t('termsOfServiceAndPrivacyPolicyText'),
              }}
            ></div>
            <div className='flex flex-col gap-4'>
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
                {t('signinWithText', ['Google'])}
              </Button>
              <div className='flex items-center'>
                <span className='bg-silver-grey h-[1px] flex-1'></span>
                <span className='mx-2'>{t('orText')}</span>
                <span className='bg-silver-grey h-[1px] flex-1'></span>
              </div>
              <TextInput
                withAsterisk
                size='md'
                label={t('emailAddressText')}
                placeholder={t('emailAddressText')}
                classNames={{ label: 'mb-1' }}
                value={fields.username}
                error={t(error.username)}
                onChange={(e) => onChangeField('username', e.target.value)}
              />
              <div className='relative'>
                <AppLink
                  href={routes.forgotPassword.path}
                  className='normal-text hyperlink absolute right-0 top-0'
                >
                  {`${t('forgotPasswordText')}?`}
                </AppLink>
                <TextInput
                  withAsterisk
                  size='md'
                  label={t('passwordText')}
                  placeholder={t('passwordText')}
                  classNames={{ label: 'mb-1' }}
                  value={fields.password}
                  error={t(error.password)}
                  onChange={(e) => onChangeField('password', e.target.value)}
                />
              </div>
              <Button onClick={() => handleSubmit(onSubmit)}>
                {t('signinWithText', ['Email'])}
              </Button>
              <div className='text-center'>
                {`${t('doNotHaveAnAccountText')} `}
                <AppLink
                  href={routes.signup.path}
                  className='normal-text hyperlink'
                >
                  {t('signupNowText')}
                </AppLink>
              </div>
            </div>
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
    </div>
  );
}
