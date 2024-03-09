import React from 'react';

import { Button } from '@/components/Button';
import { IconCheckCircle, IconLoader, IconUsers } from '@/components/Icons';
import { cn } from '@/lib/classNames';
import { useLocale } from '@/locale';

import PDFDownloader from './PDFDowloader';

interface JobAppliedDetailsProps {
  title: string;
  imageUrl: string;
  applicantName: string;
  applicantEmail: string;
  applicationDate: string;
  status: string;
  coverLetter: string;
}

const JobAppliedDetails: React.FC<JobAppliedDetailsProps> = ({
  title,
  imageUrl,
  applicantName,
  applicantEmail,
  applicationDate,
  status,
  coverLetter,
}) => {
  const { t } = useLocale();

  const statusIcons: { [key: string]: JSX.Element } = {
    Hired: <IconCheckCircle className='h-4 w-4' />,
    Submitting: <IconLoader className='h-4 w-4 ' />,
    Interviewing: <IconUsers className='h-4 w-4' />,
  };
  return (
    <div className='relative '>
      <div className='rounded-md border border-gray-200 bg-white px-6 py-4 shadow-sm'>
        <p className='text-[20px] font-[600] leading-normal'>{title}</p>
      </div>
      <div className='mt-2 h-[700px] overflow-auto rounded-md border border-gray-200 bg-white px-6 py-6 shadow-sm'>
        <div className='items-cente flex flex-row items-center justify-between gap-4'>
          <div className='w-1/12'>
            <img src={imageUrl} alt='User' className='h-16 w-16 rounded-full' />
          </div>
          <div className='flex w-11/12 flex-row justify-between'>
            <div>
              <p className='text-[18px] font-[600] '>{applicantName}</p>
              <p className='text-rich-grey mt-1'>{applicantEmail}</p>
              <div
                className={cn(
                  'mt-1 flex items-center gap-2 text-[16px] font-[500]',
                  {
                    'text-green': status === 'Hired',
                    'text-orange': status === 'Submitting',
                    'text-blue': status === 'Interviewing',
                  }
                )}
              >
                {statusIcons[status]} {status}
              </div>
            </div>
            <p className='text-rich-grey'>{applicationDate}</p>
          </div>
        </div>
        {/* Cover letter */}
        <p className='mt-10 text-[20px] font-[600]'> {t('Cover letter')}</p>
        <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
        <div className='mt-6 leading-normal'>
          <p>{coverLetter}</p>
        </div>
        <hr className='mt-6 h-[1px] w-full border-none bg-gray-200' />
        {/* Resume */}
        <div>
          <p className='mt-10 text-[20px] font-[600]'>{t('Resume')}</p>
          <div className='mt-4 space-y-2'>
            <PDFDownloader capacity='10 MB' fileName='My CV' />
          </div>
        </div>
        {/* Button */}
        <div className='absolute bottom-4 right-8 w-full space-x-2  text-end'>
          <Button className='text-rich-grey hover:bg-light-grey border-none bg-transparent px-8 py-2'>
            {t('Deny')}
          </Button>
          <Button intent='primary' size='large'>
            {t('Accecpt')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobAppliedDetails;
