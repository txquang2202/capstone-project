import { cn } from '@/lib/classNames';
import dayjs from '@/lib/dayjs';

import { IconMapPin, IconRemote, IconSalary } from '../Icons';
import { StickyTag } from '../StickyTag';

export const JOB_TYPE = {
  ONSITE: 0,
  REMOTE: 1,
  HYBRID: 2,
};

export const JOB_TYPE_TEXT = {
  [JOB_TYPE.ONSITE]: 'onsiteText',
  [JOB_TYPE.REMOTE]: 'remoteText',
  [JOB_TYPE.HYBRID]: 'hybridText',
};

type Props = {
  title: string;
  image: string;
  type: number;
  locations: string[];
  salaryTo: number;
  salaryFrom: number;
  hideSalary?: boolean;
  company: string;
  tags: string[];
  postedAt: Date;
  selected?: boolean;
  isHot?: boolean;
  unit: string;
  onSelect: () => void;
};

const JobItem = ({
  title,
  image,
  type,
  locations,
  tags,
  salaryFrom,
  salaryTo,
  hideSalary,
  company,
  isHot,
  unit,
  postedAt,
  selected,
  onSelect,
}: Props) => {
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
          Post {dayjs(postedAt).fromNow()}
        </div>
        <div className='pt-2 text-lg font-bold'>{title}</div>
        <div className='my-3 flex items-center gap-2'>
          <img alt='company logo' src={image} className='h-12 w-12' />
          {company}
        </div>
        <div className='text-success-color border-silver-grey flex items-center gap-2 border-b border-dashed pb-3 font-medium'>
          <IconSalary />
          {hideSalary
            ? "You'll love it"
            : `${salaryFrom} - ${salaryTo} ${unit}`}
        </div>
        <div className='mb-1 mt-3 flex items-center gap-1'>
          <IconRemote size={16} color='var(--dark-grey)' viewBox='0 0 24 25' />
          {JOB_TYPE_TEXT[type]}
        </div>
        <div className='flex items-center gap-1'>
          <IconMapPin size={16} color='var(--dark-grey)' />
          {locations.join('-')}
        </div>
        <div className='mb-2 mt-3 flex items-center gap-2'>
          {tags.map((tag) => (
            <div className='itag itag-light itag-sm'>{tag}</div>
          ))}
        </div>
      </div>
    </StickyTag>
  );
};

export default JobItem;
