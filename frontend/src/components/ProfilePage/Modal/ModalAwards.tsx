import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

import { Button } from '@/components/Button';
import { IconPenTool, IconX } from '@/components/Icons';
import { UPDATE_AWARD_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';

import { useAwardData } from '../Context/AwardContext';

interface FormAwardData {
  awardName: string;
  awardOrg: string;
  awardMonth: string;
  awardYear: string;
  awardDesc: string;
}

interface ModalProps {
  closeModal: () => void;
}

const ModalAwards: React.FC<ModalProps> = ({ closeModal }) => {
  const [errors, setErrors] = useState<Partial<FormAwardData>>({});
  const { dataAward, onSave } = useAwardData();
  const [myData, setMyData] = useState<FormAwardData>(dataAward);
  const { authUser } = useAuthData();
  const { t } = useLocale();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setMyData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const [updateAward] = useMutation(UPDATE_AWARD_USER);

  const handleSave = async () => {
    const requiredFields: Array<keyof FormAwardData> = [
      'awardName',
      'awardOrg',
      'awardMonth',
      'awardYear',
    ];

    const newErrors: Partial<FormAwardData> = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!myData[field]) {
        newErrors[field] = `${t('This field is required')}`;
        isValid = false;
      }
    });
    setErrors(newErrors);

    if (!isValid) {
      return;
    }
    try {
      await updateAward({
        variables: {
          input: {
            attributes: {
              awardName: myData.awardName.toString(),
              awardOrg: myData.awardOrg.toString(),
              awardMonth: myData.awardMonth.toString(),
              awardYear: myData.awardYear.toString(),
              awardDesc: myData.awardDesc.toString(),
            },
          },
          updateUserId: authUser?.id,
        },
      });
      onSave(myData);
      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-[#000000] bg-opacity-50 transition-opacity duration-1000'>
      <div className='h-[550px] w-[800px]  rounded-lg bg-white py-4'>
        <div className='flex flex-row justify-between px-6'>
          <h2>{t('Awards')}</h2>
          <IconX onClick={() => closeModal()} className='cursor-pointer' />
        </div>
        <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
        <div className='h-[420px] overflow-y-auto'>
          <div className='px-6 py-3'>
            <div className=' flex flex-col gap-3'>
              {/* Awards name */}
              <div>
                <p>
                  {t('Awards name')} <span className='text-red'>*</span>
                </p>
                <input
                  type='text'
                  id='awardName'
                  name='awardName'
                  value={myData.awardName}
                  onChange={handleChange}
                  className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  placeholder={t('Awards name')}
                  required
                />
                {errors.awardName && (
                  <p className='text-red mt-1 text-xs'>{errors.awardName}</p>
                )}
              </div>
              {/* Awards organization */}
              <div>
                <p>
                  {t('Awards organization')} <span className='text-red'>*</span>
                </p>
                <input
                  type='text'
                  id='awardOrg'
                  name='awardOrg'
                  value={myData.awardOrg}
                  onChange={handleChange}
                  className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  placeholder={t('Awards organization')}
                  required
                />
                {errors.awardOrg && (
                  <p className='text-red mt-1 text-xs'>{errors.awardOrg}</p>
                )}
              </div>

              {/* Issue date*/}
              <div className='flex flex-row justify-start gap-4'>
                <div className='w-1/2'>
                  <p>
                    {t('Issue date')} <span className='text-red'>*</span>
                  </p>
                  <div className='flex flex-row items-end justify-center gap-4'>
                    <div className='w-full'>
                      <p className='text-dark-grey text-[12px]'>{t('Month')}</p>
                      <select
                        name='awardMonth'
                        id='awardMonth'
                        value={myData.awardMonth}
                        onChange={handleChange}
                        className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                      >
                        <option value='01'>01</option>
                        <option value='02'>02</option>
                        <option value='03'>03</option>
                        <option value='04'>04</option>
                        <option value='05'>05</option>
                        <option value='06'>06</option>
                        <option value='07'>07</option>
                        <option value='08'>08</option>
                        <option value='09'>09</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                      </select>
                      {errors.awardMonth && (
                        <p className='text-red mt-1 text-xs'>
                          {errors.awardMonth}
                        </p>
                      )}
                    </div>
                    <div className='w-full'>
                      <p className='text-dark-grey text-[12px]'>{t('Year')}</p>
                      <select
                        name='awardYear'
                        id='awardYear'
                        value={myData.awardYear}
                        onChange={handleChange}
                        className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                      >
                        {Array.from(
                          { length: new Date().getFullYear() - 1999 },
                          (_, index) => {
                            const year = new Date().getFullYear() - index;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          }
                        )}
                      </select>
                      {errors.awardYear && (
                        <p className='text-red mt-1 text-xs'>
                          {errors.awardYear}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className='mt-2 flex flex-col '>
                <p className='text-[18px] font-[600]'>{t('Description')}</p>
                <div className='mt-2 flex flex-row items-start gap-x-2'>
                  <div className='bg-orange rounded p-1'>
                    <IconPenTool className='h-3 w-3 text-white' />
                  </div>
                  <p>
                    <span className='text-orange text-[17px] font-[800]'>
                      Tips:{' '}
                    </span>
                    {t(
                      'Shortly describe the relevant category or the reason for the award.'
                    )}
                  </p>
                </div>
                <textarea
                  name='awardDesc'
                  value={myData.awardDesc}
                  onChange={handleChange}
                  id='default-input'
                  className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  placeholder={t('Additional details')}
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <hr className='h-[1px] w-full border-none bg-gray-200' />
        {/* Save & Cancel */}
        <div className='px-6 py-3 text-end'>
          <Button
            intent='transparent'
            className='hover:text-dark-grey h-[36px] rounded px-12 py-2  text-center text-[16px] font-[600] hover:bg-gray-100'
            onClick={() => closeModal()}
          >
            {t('Cancel')}
          </Button>
          <Button
            onClick={() => handleSave()}
            className='hover:text-dark-grey hover:bg-dark-red h-[36px] rounded px-12  py-2 text-center text-[16px] font-[600]'
          >
            {t('Save')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalAwards;
