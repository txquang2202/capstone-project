'use client';

import { Tooltip } from '@mantine/core';
import { useState } from 'react';

import { IconInfo } from '@/components/Icons';

import MyCombobox from './option';

interface Infor {
  mail: string;
  name: string;
}

const infor: Infor = {
  mail: 'duyhq47@gmail.com',
  name: 'DuyHQ',
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>(infor.name);
  const [errorMessage, setErrorMessage] = useState<string>('');

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
    <div className='scroll-smooth bg-[#f2f2f2] pt-[88px] focus:scroll-auto'>
      <main className=' bg-[#f2f2f2]  py-[24px]'>
        <div className='flex flex-row flex-wrap items-start justify-center'>
          {/* content */}
          <div className='w-full max-w-[calc(100%-48px)] md:w-[900px]'>
            {/* account */}
            <div className='rounded-md bg-[#ffff] shadow-md'>
              <div className='flex flex-row flex-wrap justify-start px-6 pb-10 pt-6'>
                <h3>My Account</h3>
                <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
                <div className='mt-5 flex w-full flex-col'>
                  <p className='text-lg font-bold'>General Information</p>
                  <div className='mt-5 flex flex-row flex-wrap'>
                    <div className='basis-2/6'>
                      <p className='font-bold'>Email:</p>
                      <p className='mt-5 font-bold'>Username:</p>
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
                                <p className='mt-1 text-xs text-red-500'>
                                  Please enter your username
                                </p>
                              )}
                            </div>
                            <div className='mt-7 flex flex-row flex-wrap items-center justify-end gap-6'>
                              <button
                                className='min-w-[90px] rounded border border-red-600 bg-red-600 px-5 py-1 text-center text-[#ffff] hover:bg-red-700'
                                onClick={() => handleSave()}
                              >
                                Save
                              </button>
                              <button
                                className='min-w-[90px] rounded border border-gray-500 px-5 py-1 text-center hover:border-red-600 hover:text-red-600'
                                onClick={() => handleCancel()}
                              >
                                Cancel
                              </button>
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
                                <g id='SVGRepo_bgCarrier' stroke-width='0' />

                                <g
                                  id='SVGRepo_tracerCarrier'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />

                                <g id='SVGRepo_iconCarrier'>
                                  <path
                                    d='M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z'
                                    stroke='#ed1b2f'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                  />
                                  <path
                                    d='M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13'
                                    stroke='#ed1b2f'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
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

            {/* notifications */}
            <div className='mt-6'>
              <div className='rounded-md bg-[#ffff] shadow-md'>
                <div className='flex flex-row flex-wrap justify-start px-6 pb-20 pt-6'>
                  <h3>Notifications</h3>
                  <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
                  <div className='mt-4 flex w-full flex-row  flex-wrap items-start'>
                    <div className='basis-2/5'>
                      <h4>Don't receive invitations from:</h4>
                      <h6 className='mt-2'>Maximum 5 employers</h6>
                    </div>
                    <div className='basis-3/5'>
                      <MyCombobox />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* delete acount */}
            <div className='mt-6'>
              <div className='rounded-md bg-[#ffff] shadow-md'>
                <div className='flex flex-row flex-wrap justify-start px-6 pb-10 pt-6'>
                  <h3>Delete Account</h3>
                  <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
                  <div className='mt-4 flex w-full flex-row  flex-wrap items-center'>
                    <p>
                      Account deletion is a permanent action and cannot be
                      undone. If you are deleting your account due to an
                      excessive email notifications, you can unsubscribe from
                      emails
                      <span className='font-semibold text-blue-600'>here</span>.
                    </p>
                    <a
                      href='#!'
                      className='mt-6 rounded-md border border-red-400 px-6 py-3 text-center font-bold text-red-400 hover:bg-red-50'
                    >
                      Delete your account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
