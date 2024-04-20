'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { useLocale } from '@/locale';

export default function EmployerPage() {
  const router = useRouter();
  const { t } = useLocale();
  return (
    <main className='employer-landing-container mb-44 mt-56 '>
      <div className='imt-22 thankyou-page container bg-white text-center'>
        <h1 className='text-it-black mx-3'>
          {t('Thank you for contacting us!')}
        </h1>
        <div className='col-md-6 mx-md-auto paragraph text-rich-grey mx-3 mt-4 px-56'>
          {t(
            'Our Customer Love Team will get in touch with you soon. In the meantime, feel free to explore our Blog for valuable insights.'
          )}
        </div>
        <div className='actions d-flex flex-column flex-md-row align-items-center justify-content-center mx-3 mb-5 mt-4'>
          <Button
            intent='primary'
            size='xl'
            className='m-4 w-60 flex-1'
            onClick={() => router.push('/blog')}
          >
            {t('Visit the blog')}
          </Button>
          <Button
            intent='secondary'
            size='xl'
            className='m-4 w-60 flex-1'
            onClick={() => router.push('/')}
          >
            {t('Back to Homepage')}
          </Button>
        </div>
      </div>
    </main>
  );
}
