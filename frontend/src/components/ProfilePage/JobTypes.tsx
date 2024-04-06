import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/Button';
import { GET_JOBTYPES_USER, UPDATE_JOBTYPES_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';

interface JobTypeData {
  jobLevel: string[];
  workingTypes: string[];
  companyTypes: string[];
  companySizes: string[];
  location: string;
  [key: string]: string[] | string; // Index signature
}

interface NotificationProps {
  onClose: () => void;
}

export default function JobTypes() {
  const { t } = useLocale();
  const { authUser } = useAuthData();
  const { loading, error, data } = useQuery(GET_JOBTYPES_USER, {
    variables: { userId: authUser?.id },
  });
  const [showNotification, setShowNotification] = useState(false);

  const [jobType, setJobType] = useState<JobTypeData>({
    jobLevel: [],
    workingTypes: [],
    companyTypes: [],
    companySizes: [],
    location: 'Ho Chi Minh',
  });

  useEffect(() => {
    if (!loading && !error && data) {
      const jobType = data?.user?.attributes;
      const initData: JobTypeData = {
        jobLevel: jobType?.jobLevel ?? '',
        workingTypes: jobType?.workingType ?? '',
        companyTypes: jobType?.companyType ?? '',
        companySizes: jobType?.companySize ?? '',
        location: jobType?.jobLocation ?? '',
      };

      setJobType(initData);
    }
  }, [loading, error, data]);

  const [updateJobTypes] = useMutation(UPDATE_JOBTYPES_USER);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value, name } = event.target;
    setJobType((prevState: JobTypeData) => ({
      ...prevState,
      [name]: checked
        ? [...(prevState[name] as string[]), value]
        : (prevState[name] as string[]).filter((item) => item !== value),
    }));
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setJobType((prevState) => ({
      ...prevState,
      location: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateJobTypes({
        variables: {
          input: {
            attributes: {
              jobLevel: jobType.jobLevel,
              workingType: jobType.workingTypes,
              companyType: jobType.companyTypes,
              companySize: jobType.companySizes,
              jobLocation: jobType.location.toString(),
            },
          },
          updateUserId: authUser?.id,
        },
      });
      setShowNotification(true);
      console.log('Job types updated successfully!');
    } catch (error) {
      console.error('Error updating job types:', error);
    }
  };

  return (
    <div className='min-w-fit rounded-md bg-[#ffff]  shadow-md'>
      <div className='flex flex-col flex-wrap px-7 pb-6 pt-6'>
        <h1 className='text-[22px]'>{t('My interested job type')}</h1>
        <p className='mt-6'>
          {t(
            'Let us know the type of job you prefer so we can recommend more suitable opportunities on our site. No emails sent'
          )}
        </p>
        <hr className='mt-7 h-[1px] w-full border-none bg-gray-200' />
        <div className='py-7'>
          {/* Job Level */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] font-[600]'>{t('Job Level')}</p>
              <p className='text-[16px] '>{t('Allow multiple choices')}</p>
            </div>
            <div className='col-span-2'>
              <div className='space-y-2'>
                {[
                  'Fresher (0 - 10 months of experience)',
                  'Junior (10 - 36 months of experience)',
                  'Senior (37 - 60 months of experience)',
                  'Manager (> 60 months of experience)',
                ].map((level) => (
                  <div className='space-x-2' key={level}>
                    <input
                      type='checkbox'
                      name='jobLevel'
                      className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                      value={level}
                      checked={jobType.jobLevel?.includes(level)}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={level}>{level}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Working Type */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] font-[600]'>{t('Working Type')}</p>
              <p className='text-[16px] '>{t('Allow multiple choices')}</p>
            </div>
            <div className='col-span-2 flex flex-wrap gap-x-6 gap-y-3'>
              {['At office', 'Remote', 'Hybrid'].map((level) => (
                <div className='space-x-2' key={level}>
                  <input
                    type='checkbox'
                    name='workingTypes'
                    className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                    value={level}
                    checked={jobType.workingTypes?.includes(level)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={level}>{level}</label>
                </div>
              ))}
            </div>
          </div>
          {/* Company Type */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] font-[600]'>{t('Company Type')}</p>
              <p className='text-[16px] '>{t('Allow multiple choices')}</p>
            </div>
            <div className='col-span-2 flex flex-wrap gap-x-6 gap-y-3'>
              {[
                'IT Outsourcing',
                'IT Product',
                'Headhunt',
                'IT Service and IT Consulting',
                'Non-IT',
              ].map((level) => (
                <div className='space-x-2' key={level}>
                  <input
                    type='checkbox'
                    name='companyTypes'
                    className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                    value={level}
                    checked={jobType.companyTypes?.includes(level)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={level}>{level}</label>
                </div>
              ))}
            </div>
          </div>
          {/* Company Size */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] font-[600]'>{t('Company Size')}</p>
              <p className='text-[16px] '>{t('Allow multiple choices')}</p>
            </div>
            <div className='col-span-2 flex flex-wrap gap-x-6 gap-y-3'>
              {[
                '1-50',
                '51-150',
                '151-300',
                '301-500',
                '501-1000',
                '1000+',
              ].map((level) => (
                <div className='space-x-2' key={level}>
                  <input
                    type='checkbox'
                    name='companySizes'
                    className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                    value={level}
                    checked={jobType.companySizes?.includes(level)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={level}>{level}</label>
                </div>
              ))}
            </div>
          </div>
          {/* Location */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <p className=' text-[20px] font-[600]'>{t('Location')}</p>
            <div className='col-span-2 flex flex-row items-center gap-5'>
              <select
                name='location'
                id='location'
                value={jobType.location}
                onChange={handleLocationChange}
                className='focus:border-silver-grey focus:ring-light-red active:bg-silver-grey border-silver-grey border-1 w-full rounded py-3 pr-20 text-[18px] focus:outline-none focus:ring'
              >
                <option value='None'>None</option>
                <option value='Ho Chi Minh'>Ho Chi Minh</option>
                <option value='Ha Noi'>Ha Noi</option>
                <option value='Da Nang'>Da Nang</option>
                <option value='Others'>Others</option>
              </select>
            </div>
          </div>

          {/* Button Save */}
          <div className='mt-7 text-center sm:text-end'>
            <Button
              intent='primary'
              size='large'
              onClick={handleSave}
              className='h-[46px] w-40 text-[16px] font-[600] hover:bg-red-700'
            >
              {t('Save')}
            </Button>
          </div>
        </div>
      </div>
      {showNotification && (
        <Notification onClose={() => setShowNotification(false)} />
      )}
    </div>
  );
}

const Notification: React.FC<NotificationProps> = ({ onClose }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='z-10 mx-auto w-full max-w-sm rounded-md bg-white p-4'>
        <p className='text-[20px] text-gray-800'>Lưu thành công!</p>
        <div className='flex justify-end'>
          <Button
            className='mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none'
            onClick={onClose}
          >
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};
