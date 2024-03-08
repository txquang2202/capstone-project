import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import { useLocale } from '@/locale';

type Props = {
  selected: string;
};

const Navigation = ({ selected }: Props) => {
  const params = useParams();
  const { t } = useLocale();

  return (
    <nav className='bg-[#ffff] shadow-2xl'>
      <div className='container-xxl flex flex-row  flex-wrap justify-center gap-x-4 font-semibold text-gray-500 transition duration-300 sm:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start'>
        <div
          className={`mt-2 w-[160px] cursor-pointer py-3 text-center  ${
            selected === 'profile'
              ? 'border-red text-red border-b-[3px]'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link href={`/${params?.lang}/profile-cv`} className='px-15 py-3'>
            {t('Profile')}
          </Link>
        </div>
        <div
          className={`mt-2 w-[160px] cursor-pointer py-3 text-center ${
            selected === 'manage-cv'
              ? 'border-red text-red border-b-[3px]'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link
            href={`/${params?.lang}/profile-cv/manage-cv`}
            className='px-15 py-3'
          >
            {t('Manage CVs')}
          </Link>
        </div>
        <div
          className={`mt-2 w-[160px] cursor-pointer py-3 text-center ${
            selected === 'job-preferences'
              ? 'border-red text-red border-b-[3px]'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link
            href={`/${params?.lang}/profile-cv/job-preferences`}
            className='px-15 py-3'
          >
            {t('Job Preferences')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
