'use client';

import CVUploader from '@/components/ProfilePage/CVUploader';
import { useLocale } from '@/locale';

export default function CVManagement() {
  const { t } = useLocale();

  const handleFileChange = (file: File) => {
    console.log('Selected file:', file);
  };

  return (
    <div className='rounded-md bg-[#ffff] shadow-md'>
      <div className='flex flex-col flex-wrap px-7 pb-6 pt-6'>
        <h3>{t('Manage CVs')}</h3>
        <p className='mt-6'>
          {t(
            'Upload your CV below to use it throughout your application process'
          )}
        </p>
        <div className='mt-6'>
          <CVUploader onFileChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
}
