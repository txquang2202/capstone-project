'use client';

import { Tooltip } from '@mantine/core';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { IconInfo } from '@/components/Icons';
import { useLocale } from '@/locale';

interface Infor {
  mail: string;
  name: string;
}

const infor: Infor = {
  mail: 'duyhq47@gmail.com',
  name: 'DuyHQ',
};

export default function Information() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>(infor.name);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { t } = useLocale();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(infor.name);
    setErrorMessage('');
  };

  const handleSave = () => {
    if (editedName.trim() === '') {
      setErrorMessage('Name cannot be empty');
      return;
    }
    setIsEditing(false);
    infor.name = editedName;
    setErrorMessage('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  return (
    <div className='rounded-md bg-[#ffff] shadow-md'>
      <div className='flex flex-row flex-wrap justify-start px-6 pb-10 pt-6'>
        <h3>{t('My Account')}</h3>
        <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
        <div className='mt-5 flex w-full flex-col'>
          <p className='text-lg font-bold'>{t('General Information')}</p>
          <div className='mt-5 flex flex-row flex-wrap'>
            <div className='basis-2/6'>
              <p className='font-bold'>Email:</p>
              <p className='mt-5 font-bold'>{t('Username')}:</p>
            </div>
            <div className='basis-4/6'>
              <div className='flex flex-row items-center gap-2'>
                <p>{infor.mail}</p>
                <Tooltip label="You can't change your login email">
                  <IconInfo color='#A3A3A3' size={16} />
                </Tooltip>
              </div>
              <div className='mt-5 flex flex-row items-center gap-2'>
                {isEditing ? (
                  <div className='w-full md:w-[32rem]'>
                    <div className='relative h-10 w-full min-w-[200px]'>
                      <input
                        type='text'
                        id='default-input'
                        className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-red-400 focus:ring-red-400'
                        value={editedName}
                        onChange={handleChange} // Handle input changes
                      />
                      {errorMessage && (
                        <p className='text-red mt-1 text-xs'>
                          {t('Please enter your username')}
                        </p>
                      )}
                    </div>
                    <div className='mt-7 flex flex-row flex-wrap items-center justify-end gap-5'>
                      <Button
                        intent='primary'
                        size='large'
                        className='h-[34px] w-[90px] text-[16px] font-[300] hover:bg-red-700'
                        onClick={() => handleSave()}
                      >
                        {t('Save')}
                      </Button>
                      <Button
                        intent='subtle'
                        size='large'
                        className='hover:border-red hover:text-red text-gray  h-[34px] w-[90px] border-gray-500 text-[16px] font-[300]'
                        onClick={() => handleSave()}
                      >
                        {t('Cancel')}
                      </Button>
                    </div>
                  </div>
                ) : (
                  // <div className='h-6 w-full bg-orange-400 px-64'></div>
                  <div className='flex flex-row items-center gap-2'>
                    <p>{infor.name}</p>
                    <button onClick={() => handleEdit()}>
                      <svg
                        width='16px'
                        height='16px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        stroke='#db1f1f'
                      >
                        <g id='SVGRepo_bgCarrier' strokeWidth='0' />

                        <g
                          id='SVGRepo_tracerCarrier'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />

                        <g id='SVGRepo_iconCarrier'>
                          <path
                            d='M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z'
                            stroke='#ed1b2f'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13'
                            stroke='#ed1b2f'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
