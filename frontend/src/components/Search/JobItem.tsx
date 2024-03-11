import { JOB_TYPE_TEXT } from '@/constant/job';
import { cn } from '@/lib/classNames';
import dayjs from '@/lib/dayjs';
import { formatCurrency } from '@/lib/number';
import { useLocale } from '@/locale';
import { Job } from '@/types/job';

import { IconMapPin, IconRemote, IconSalary } from '../Icons';
import { StickyTag } from '../StickyTag';

type Props = Job & {
  selected?: boolean;
  isHot?: boolean;
  unit: string;
  onSelect: () => void;
};

const JobItem = ({ company, isHot, selected, onSelect, ...job }: Props) => {
  const { t } = useLocale();

  return (
    <StickyTag
      type={isHot ? 'hot' : 'highlight'}
      title={isHot ? 'SUPPER HOT' : 'HOT'}
      position='right'
    >
      <div
        onClick={onSelect}
        className={cn('cursor-pointer rounded-lg bg-white px-3 py-2', {
          'bg-light-warning-color border-light-red border': isHot,
          'border-primary after:bg-primary relative border after:absolute after:bottom-0 after:left-0 after:top-0 after:my-2 after:w-[6px] after:rounded-r-lg':
            selected,
        })}
      >
        {selected && (
          <span className='border-l-primary absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-b-8 border-l-8 border-t-8 border-b-transparent border-t-transparent'></span>
        )}
        <div className='text-dark-grey pt-2 text-sm'>
          Post {dayjs(job.date_posted).fromNow()}
        </div>
        <div className='pt-2 text-lg font-bold'>{job.name}</div>
        <div className='my-3 flex items-center gap-2'>
          <img
            alt='company logo'
            src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMExhTkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c3d6987816061008255fe4b4bf962937bdc379a4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/LOGO%20ICHIBA.jpg'
            className='h-12 w-12'
          />
          {company.company_name}
        </div>
        <div className='text-success-color border-silver-grey flex items-center gap-2 border-b border-dashed pb-3 font-medium'>
          <IconSalary />
          {!job.salary_from && !job.salary_to
            ? "You'll love it"
            : `${formatCurrency(
                job.salary_from || 0,
                job.unit,
                job.unit === 'VND' ? 'vi-VN' : 'en'
              )} - ${formatCurrency(
                job.salary_to || 0,
                job.unit,
                job.unit === 'VND' ? 'vi-VN' : 'en'
              )}`}
        </div>
        <div className='mb-1 mt-3 flex items-center gap-1'>
          <IconRemote size={16} color='var(--dark-grey)' viewBox='0 0 24 25' />
          {t(JOB_TYPE_TEXT[job.working_type])}
        </div>
        <div className='flex items-center gap-1'>
          <IconMapPin size={16} color='var(--dark-grey)' />
          {job.country}
        </div>
        <div className='mb-2 mt-3 flex items-center gap-2'>
          {job.skills &&
            JSON.parse(job.skills).map((tag: string, index: number) => (
              <div key={index} className='itag itag-light itag-sm'>
                {tag}
              </div>
            ))}
        </div>
      </div>
    </StickyTag>
  );
};

export default JobItem;
