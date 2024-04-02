import { Company } from '@/types/company';

import { IconGlobe } from '../Icons';

type Props = Company & {
  onSelect: () => void;
};

const CompanyItem = ({
  brief_overview,
  company_name,
  company_type,
  company_website,
  country,
  onSelect,
}: Props) => {
  return (
    <div
      className='hover:bg-light-grey min-h-[100%] rounded-lg bg-white  p-4 sm:p-8'
      onClick={onSelect}
    >
      <div className=' mb-6 flex items-center gap-2'>
        <img
          alt='company logo'
          src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMExhTkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c3d6987816061008255fe4b4bf962937bdc379a4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/LOGO%20ICHIBA.jpg'
          className='border-silver-grey h-12 w-12 rounded border sm:h-16 sm:w-16'
        />
        <h2 className='pt-2 text-lg font-bold'>{company_name}</h2>
      </div>
      <div className='mb-6'>
        <p className='text-gray-600'>{brief_overview}</p>
      </div>
      <div className='mb-4 flex items-center space-x-4'>
        <IconGlobe className='text-gray-600' />
        <a
          href={company_website}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline'
        >
          {company_website}
        </a>
      </div>

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        <div>
          <h3 className='mb-2 font-bold text-gray-600'>Company Type</h3>
          <p>{company_type}</p>
        </div>
        <div>
          <h3 className='mb-2 font-bold text-gray-600'>Country</h3>
          <p>{country}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
