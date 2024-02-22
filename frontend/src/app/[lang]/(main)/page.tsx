'use client';

import { useLocale } from '@/locale';

import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  const { t } = useLocale();

  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2 text-sm text-gray-800'>{t('signinText')}</p>
        </div>
      </section>
    </main>
  );
}
