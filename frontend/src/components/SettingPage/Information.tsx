'use client';

import { useMutation } from '@apollo/client';
import { Tooltip } from '@mantine/core';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { IconEdit, IconInfo } from '@/components/Icons';
import { UPDATE_NAME_AUTH_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';

export default function Information() {
  const { authUser } = useAuthData();
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useLocale();
  const [updateUser] = useMutation(UPDATE_NAME_AUTH_USER);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedFirstName(authUser?.firstName || '');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedFirstName('');
    setErrorMessage('');
  };

  const handleSave = async () => {
    try {
      if (!editedFirstName.trim()) {
        setErrorMessage('Name cannot be empty');
        return;
      }

      await updateUser({
        variables: {
          input: {
            firstName: editedFirstName,
          },
          updateUserId: authUser?.id,
        },
      });

      setIsEditing(false);
      setEditedFirstName('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedFirstName(event.target.value);
    setErrorMessage('');
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
                <p>{authUser?.email}</p>
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
                        value={editedFirstName}
                        onChange={handleChange}
                      />
                      {errorMessage && (
                        <p className='text-red mt-1 text-xs'>{errorMessage}</p>
                      )}
                    </div>
                    <div className='mt-7 flex flex-row flex-wrap items-center justify-end gap-5'>
                      <Button
                        intent='primary'
                        size='large'
                        className='h-[34px] w-[90px] text-[16px] font-[300] hover:bg-red-700'
                        onClick={handleSave}
                      >
                        {t('Save')}
                      </Button>
                      <Button
                        intent='subtle'
                        size='large'
                        className='hover:border-red hover:text-red text-gray  h-[34px] w-[90px] border-gray-500 text-[16px] font-[300]'
                        onClick={handleCancel}
                      >
                        {t('Cancel')}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-row items-center gap-2'>
                    <p>{authUser?.firstName}</p>
                    <button onClick={handleEdit}>
                      <IconEdit className='text-red h-4 w-4' />
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
