import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/Button';
import { IconCheckCircle, IconFileText, IconLoader } from '@/components/Icons';
import { UPDATE_JOB_STATUS } from '@/graphql/jobs-applied';
import { cn } from '@/lib/classNames';
import { useLocale } from '@/locale';

interface JobAppliedDetailsProps {
  id: string;
  title: string;
  imageUrl: string;
  applicantName: string;
  applicantEmail: string;
  applicationDate: string;
  status: string;
  coverLetter: string;
  nameCV: string;
  onUpdateStatus: (newStatus: string) => void;
}

const JobAppliedDetails: React.FC<JobAppliedDetailsProps> = ({
  id,
  title,
  imageUrl,
  applicantName,
  applicantEmail,
  applicationDate,
  status,
  coverLetter,
  nameCV,
  onUpdateStatus,
}) => {
  const { t } = useLocale();
  const [fileSize, setFileSize] = useState<number | null>(null);
  const url = nameCV;
  const fileName = url.substring(url.lastIndexOf('/') + 1);

  const [updateJobApplication, { loading: updatingStatus }] =
    useMutation(UPDATE_JOB_STATUS);

  const statusIcons: { [key: string]: JSX.Element } = {
    Accepted: <IconCheckCircle className='h-4 w-4' />,
    Submitting: <IconLoader className='h-4 w-4 ' />,
  };

  const handleChangeStatus = () => {
    const newStatus = 'Accepted';
    updateJobApplication({
      variables: {
        input: {
          status: newStatus,
        },
        updateJobApplicationId: id,
      },
    })
      .then(() => {
        onUpdateStatus(newStatus);
      })
      .catch((error) => {
        console.error('Error updating job application status:', error);
      });
  };

  useEffect(() => {
    fetch(nameCV)
      .then((response) => {
        const contentLength = response.headers.get('Content-Length');
        if (contentLength) {
          const fileSizeInBytes = parseInt(contentLength, 10);

          setFileSize(fileSizeInBytes);
        }
      })
      .catch((error) => {
        console.error('Error fetching file size:', error);
      });
  }, [nameCV]);

  const renderFileSize = () => {
    if (fileSize !== null) {
      const fileSizeInKB = fileSize / 1024;
      const fileSizeInMB = fileSizeInKB / 1024;
      return `${fileSizeInMB.toFixed(2)} MB`;
    } else {
      return 'Unknown';
    }
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
                    'text-green': status === 'Accepted',
                    'text-blue': status === 'Submitting',
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
            <a
              href={nameCV}
              className='border-silver-grey hover:text-red hover:border-red mr-2 inline-block cursor-pointer rounded-md border px-4 py-2'
            >
              <div className='flex flex-row items-center gap-2'>
                <IconFileText />
                <div>
                  <p className='text-[16px]'>{fileName}</p>
                  <p className=' text-[13px]'>{renderFileSize()}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* Button */}
        <div className='absolute bottom-4 right-8 w-full space-x-2  text-end'>
          <Button
            intent='primary'
            size='large'
            onClick={handleChangeStatus}
            disabled={status === 'Accepted' || updatingStatus}
          >
            {updatingStatus ? <IconLoader className='h-4 w-4' /> : t('Accept')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobAppliedDetails;
