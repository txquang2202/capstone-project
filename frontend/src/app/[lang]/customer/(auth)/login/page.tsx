'use client';

import { PasswordInput, TextInput } from '@mantine/core';
import Image from 'next/image';

import { AppLink } from '@/components/AppLink';
import { Button } from '@/components/Button';
import { routes } from '@/configs/router';
import { useForm } from '@/hooks/useForm';
import { useLocale } from '@/locale';

type LoginForm = {
  username: string;
  password: string;
};

export default function Page() {
  const { t } = useLocale();
  const { fields, error, onChangeField } = useForm<LoginForm>({
    defaultState: { username: '', password: '' },
    config: {
      username: { required: true },
      password: { required: true },
    },
  });

  // const onSubmit = () => {
  //   console.log(fields);
  // };

  return (
    <div className='mx-20 mb-[100px] py-2.5'>
      <div className='my-[42px] flex items-center gap-2 text-xl text-[#4e4e4e]'>
        Welcome to the
        <Image alt='logo' src='/images/logo-black.png' width={80} height={30} />
        Customer Admin Site
      </div>
      <div className='flex gap-[10%]'>
        <div className='w-1/2'>
          <div className='mb-5 text-[28px] font-medium'>Login</div>
          <div
            className='[&_a]:text-hyperlink mb-6 text-sm text-[#212529]'
            dangerouslySetInnerHTML={{
              __html: t('termsOfServiceAndPrivacyPolicyText'),
            }}
          ></div>
          <div className='flex flex-col gap-4'>
            <TextInput
              withAsterisk
              size='md'
              label={t('emailAddressText')}
              placeholder={t('emailAddressText')}
              classNames={{ label: 'mb-1 font-normal' }}
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
              <PasswordInput
                withAsterisk
                size='md'
                label={t('passwordText')}
                placeholder={t('passwordText')}
                classNames={{ label: 'mb-1 font-normal' }}
                value={fields.password}
                error={t(error.password)}
                onChange={(e) => onChangeField('password', e.target.value)}
              />
            </div>
            <div className='flex items-center gap-2'>
              <input type='checkbox' className='rounded' />
              Remember me
            </div>
            <Button href={routes.customerDashboard.path} className='mt-3'>
              Login
            </Button>
            <div className='mt-5 flex gap-1 text-xs'>
              <div>Note:</div>
              <div className='text-[rgba(0,0,0,.5)]'>
                Password must contain at least 12 characters. Combination of
                symbols, numbers, uppercase letters, lowercase letters. Example:
                2(!TmRqn`*-HJqwP
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-1/2 items-center justify-center'>
          <Image
            alt='image'
            src='/images/signup-image.png'
            width={320}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
