import Link from 'next/link';
import { useParams } from 'next/navigation'; // Thêm dòng này

import { useLocale } from '@/locale';

type Props = {
  selected: string;
};

const Navigation = ({ selected }: Props) => {
  const params = useParams(); // Sử dụng useParams ở đây
  const { t } = useLocale();

  return (
    <nav className='bg-[#ffff] shadow-2xl'>
      <div className='container-xxl flex  flex-row flex-wrap  justify-center gap-x-4 px-4 font-semibold text-gray-500 sm:justify-center sm:px-6 md:justify-center lg:justify-start lg:px-8 xl:justify-start 2xl:justify-start'>
        <div
          className={` mt-2  cursor-pointer py-3 text-center ${
            selected === 'my-jobs'
              ? 'border-red text-red border-b-[3px]'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          <Link href={`/${params?.lang}/my-jobs`} className='px-5 py-3 '>
            {t('Saved Jobs')}
          </Link>
        </div>
        {/* <div
          className={`mt-2  cursor-pointer py-3 text-center ${
            selected === 'recent-viewed'
              ? 'border-red text-red border-b-[3px]'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >*/}
        {/* Sử dụng params?.lang trong href */}
        {/* <Link
            href={`/${params?.lang}/my-jobs/recent-viewed`}
            className='px-5 py-3'
          >
            {t('Recent Viewed Jobs')}
          </Link>
        </div>  */}

        <div
          className={`mt-2  cursor-pointer py-3 text-center ${
            selected === 'applied'
              ? 'border-red text-red border-b-[3px]'
              : 'hover:border-gray-250 hover:border-b-[3px]'
          }`}
        >
          {/* Sử dụng params?.lang trong href */}
          <Link href={`/${params?.lang}/my-jobs/applied`} className='px-5 py-3'>
            {t('Applied Jobs')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
