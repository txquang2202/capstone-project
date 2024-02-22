'use client';

import Image from 'next/image';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

import useLocaleConfig from '@/hooks/useLocaleConfig';
import { cn } from '@/lib/classNames';
import { LocaleProvider, useLocale } from '@/locale';

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const { locale } = useLocaleConfig(params?.lang as string);
  const { t, locale: _locale } = useLocale();

  const onChangeLang = (lang: string) => {
    if (!pathname) return;
    const query = searchParams?.toString();
    const nextPath = pathname.startsWith(`/${params.lang}`)
      ? pathname.replace(`/${params.lang}`, '')
      : pathname;

    router.replace(`/${lang}/${nextPath}${query ? '?' + query : ''}`);
  };

  return (
    <LocaleProvider {...locale}>
      <>
        <div className='bg-header-gradient flex h-[88px] w-full items-center px-[30px]'>
          <Image alt='logo' src='/images/logo.png' width={104} height={40} />
          <div className='item-center ml-auto flex gap-6 text-base text-white'>
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
          </div>
        </div>
        {children}
      </>
    </LocaleProvider>
  );
}
