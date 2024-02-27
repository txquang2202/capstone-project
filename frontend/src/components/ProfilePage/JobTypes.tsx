'use client';

import { Tooltip } from '@mantine/core';
import React, { useState } from 'react';

import { Button } from '@/components/Button';
import { IconInfo } from '@/components/Icons';
import { useLocale } from '@/locale';

import CheckButton from './CheckButton';
import Options from './Options';

export default function JobTypes() {
  const { t } = useLocale();
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [error, setError] = useState('');

  const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromValue(event.target.value);
    if (
      event.target.value !== '' &&
      parseInt(event.target.value) >= parseInt(toValue)
    ) {
      setError(
        'The minimum salary cannot be more than the maximum salary. Please enter a valid salary range.'
      );
    } else {
      setError('');
    }
  };

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToValue(event.target.value);
    if (
      event.target.value !== '' &&
      parseInt(event.target.value) <= parseInt(fromValue)
    ) {
      setError(
        'The minimum salary cannot be more than the maximum salary. Please enter a valid salary range.'
      );
    } else {
      setError('');
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
          {/* Skills */}
          <div className='grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-row items-center gap-2'>
              <p className='text-[20px] font-[600]'>{t('Skills')}</p>
              <Tooltip
                label={
                  <div className='rounded-md bg-black p-1 text-[#ffff]'>
                    <div className='text-center text-[14px]'>
                      <p>Preferred skills include</p>
                      <p>subscribed skills. You can</p>
                      <p>still edit your preferred</p>
                      <p>skill list</p>
                    </div>
                  </div>
                }
              >
                <IconInfo className='text-silver-grey h-5 w-5 cursor-pointer' />
              </Tooltip>
            </div>
            <div className='col-span-2'>
              <Options />
            </div>
          </div>
          {/* Job Level */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] font-[600]'>{t('Job Level')}</p>
              <p className='text-[16px] '>{t('Allow multiple choices')}</p>
            </div>
            <div className='col-span-2'>
              <div className='space-y-2'>
                <div className='space-x-2'>
                  <input
                    type='checkbox'
                    className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                  />
                  <label htmlFor=''>
                    Fresher (0 - 10 months of experience)
                  </label>
                </div>
                <div className='space-x-2'>
                  <input
                    type='checkbox'
                    className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                  />
                  <label htmlFor=''>
                    Junior (10 - 36 months of experience)
                  </label>
                </div>
                <div className='space-x-2'>
                  <input
                    type='checkbox'
                    className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                  />
                  <label htmlFor=''>
                    Senior (37 - 60 months of experience)
                  </label>
                </div>
                <div className='space-x-2'>
                  <input
                    type='checkbox'
                    className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                  />
                  <label htmlFor=''>
                    Manager (&gt; 60 months of experience)
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Current Salary per month */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-row items-center'>
              <p className='w-[200px] text-[20px] font-[600]'>
                {t('Current Salary per month')}
              </p>
              <Tooltip
                label={
                  <div className='rounded-md bg-black p-1 text-[#ffff]'>
                    <div className='text-center text-[14px]'>
                      <p>The system is only used</p>
                      <p>for job recommendation</p>
                      <p>purposes. It is not visible</p>
                      <p>to any users.</p>
                    </div>
                  </div>
                }
              >
                <IconInfo className='text-silver-grey h-5 w-5 cursor-pointer' />
              </Tooltip>
            </div>
            <div className='col-span-1 flex flex-col items-center gap-5 md:col-span-2 md:flex-row'>
              <div className=''>
                <select
                  name='currency'
                  id='currency'
                  className='focus:border-silver-grey focus:ring-light-red active:bg-silver-grey border-silver-grey border-1 rounded py-3 pr-20 text-[18px] focus:outline-none focus:ring'
                >
                  <option value='VND'>VND</option>
                  <option value='USD'>USD</option>
                </select>
              </div>
              <div className='w-full'>
                <input
                  type='number'
                  placeholder='Enter number'
                  pattern='[0-9]*'
                  className='focus:border-silver-grey focus:ring-light-red active:bg-silver-grey border-silver-grey w-full  rounded px-4 py-3 text-[18px] focus:outline-none focus:ring'
                />
              </div>
            </div>
          </div>
          {/* Expected Salary per month */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-row items-center'>
              <p className='w-[200px] text-[20px] font-[600]'>
                {t('Expected Salary per month')}
              </p>
            </div>
            <div className='col-span-1 flex flex-col items-start gap-5 md:col-span-2 md:flex-row'>
              <div className=''>
                <select
                  name='currency'
                  id='currency'
                  className='focus:border-silver-grey focus:ring-light-red active:bg-silver-grey border-silver-grey border-1 rounded py-3 pr-20 text-[18px] focus:outline-none focus:ring'
                >
                  <option value='VND'>VND</option>
                  <option value='USD'>USD</option>
                </select>
              </div>
              <div>
                <div className='flex w-full flex-row  gap-3'>
                  <input
                    type='number'
                    placeholder='From'
                    pattern='[0-9]*'
                    value={fromValue}
                    onChange={handleFromChange}
                    className='focus:border-silver-grey focus:ring-light-red active:bg-silver-grey border-silver-grey inline-block  w-1/2 rounded px-4 py-3 text-[18px] focus:outline-none focus:ring'
                  />
                  <input
                    type='number'
                    placeholder='To'
                    pattern='[0-9]*'
                    value={toValue}
                    onChange={handleToChange}
                    className='focus:border-silver-grey focus:ring-light-red active:bg-silver-grey border-silver-grey  inline-block w-1/2 rounded px-4 py-3 text-[18px] focus:outline-none focus:ring'
                  />
                </div>
                {error && <p className='text-red mt-1 text-[13px]'>{error}</p>}
              </div>
            </div>
          </div>
          {/* Working Type */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] font-[600]'>{t('Working Type')}</p>
              <p className='text-[16px] '>{t('Allow multiple choices')}</p>
            </div>
            <div className='col-span-2 flex flex-wrap gap-3'>
              <CheckButton types={workingTypes} />
            </div>
          </div>
          {/* Company Type */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] font-[600]'>{t('Company Type')}</p>
              <p className='text-[16px] '>{t('Allow multiple choices')}</p>
            </div>
            <div className='col-span-2 flex flex-wrap gap-3'>
              <CheckButton types={companyTypes} />
            </div>
          </div>
          {/* Company Size */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[20px] font-[600]'>{t('Company Size')}</p>
              <p className='text-[16px] '>{t('Allow multiple choices')}</p>
            </div>
            <div className='col-span-2 flex flex-wrap gap-3'>
              <CheckButton types={companySizes} />
            </div>
          </div>
          {/* Current Salary per month */}
          <div className='mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-3'>
            <p className=' text-[20px] font-[600]'>{t('Location')}</p>
            <div className='col-span-2 flex flex-row items-center gap-5'>
              <select
                name='currency'
                id='currency'
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
              className='h-[46px] w-40 text-[16px] font-[600] hover:bg-red-700'
            >
              {t('Save')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const workingTypes = [
  { id: 1, text: 'At office' },
  { id: 2, text: 'Remote' },
  { id: 3, text: 'Hybrid' },
];
const companyTypes = [
  { id: 1, text: 'IT Outsourcing' },
  { id: 2, text: 'IT Product' },
  { id: 3, text: 'Headhunt' },
  { id: 4, text: 'IT Service and IT Consulting' },
  { id: 5, text: 'Non-IT' },
];
const companySizes = [
  { id: 1, text: '1-50' },
  { id: 2, text: '51-150' },
  { id: 3, text: '151-300' },
  { id: 4, text: '301-500' },
  { id: 5, text: '501-1000' },
  { id: 6, text: '1000+' },
];
