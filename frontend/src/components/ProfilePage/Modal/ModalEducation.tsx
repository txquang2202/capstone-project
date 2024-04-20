import { useMutation } from '@apollo/client';
import React, { ChangeEvent, useState } from 'react';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { IconX } from '@/components/Icons';
import { UPDATE_EDUCATION_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { cn } from '@/lib/classNames';
import { useLocale } from '@/locale';

import { useEducationData } from '../Context/EducationContenxt';

interface FormEduData {
  school: string;
  major: string;
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  details: string;
}

interface ModalProps {
  closeModal: () => void;
}

const ModalEducation: React.FC<ModalProps> = ({ closeModal }) => {
  const [checked, setChecked] = useState(false);
  const { t } = useLocale();
  const { dataEdu, onSave } = useEducationData();
  const [myData, setMyData] = useState(dataEdu);
  const [errors, setErrors] = useState<Partial<FormEduData>>({});
  const { authUser } = useAuthData();

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMyData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const [updateEdu] = useMutation(UPDATE_EDUCATION_USER);

  const handleSave = async () => {
    const requiredFields: Array<keyof FormEduData> = [
      'school',
      'major',
      'fromMonth',
      'fromYear',
      'toMonth',
      'toYear',
    ];

    const newErrors: Partial<FormEduData> = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!myData[field]) {
        if ((field !== 'toMonth' && field !== 'toYear') || checked === false) {
          newErrors[field] = `${t('This field is required')}`;
          isValid = false;
        }
      }
    });
    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    try {
      await updateEdu({
        variables: {
          input: {
            attributes: {
              school: myData.school.toString(),
              major: myData.major.toString(),
              fromMonth: myData.fromMonth.toString(),
              fromYear: myData.fromYear.toString(),
              toMonth: myData.toMonth.toString(),
              toYear: myData.toYear.toString(),
              details: myData.details.toString(),
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
          <h2>{t('Education')}</h2>
          <IconX onClick={() => closeModal()} className='cursor-pointer' />
        </div>
        <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
        <div className='h-[420px] overflow-y-auto'>
          <div className='px-6 py-3'>
            <div className=' flex flex-col gap-3'>
              {/* School */}
              <div>
                <p>
                  {t('School')} <span className='text-red'>*</span>
                </p>
                <input
                  type='text'
                  name='school'
                  value={myData.school}
                  onChange={handleChange}
                  id='default-input'
                  className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  placeholder={t('School')}
                  required
                />
                {errors.school && (
                  <p className='text-red mt-1 text-xs'>{errors.school}</p>
                )}
              </div>
              {/* Title */}
              <div>
                <p>
                  {t('Major')} <span className='text-red'>*</span>
                </p>
                <input
                  type='text'
                  name='major'
                  id='default-input'
                  value={myData.major}
                  onChange={handleChange}
                  className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  placeholder={t('Major')}
                  required
                />
                {errors.major && (
                  <p className='text-red mt-1 text-xs'>{errors.major}</p>
                )}
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox checked={checked} onChange={handleCheck} />
                <span>{t('I am currently studying here')}</span>
              </div>
              {/* From and To */}
              <div className='flex flex-row items-start justify-center gap-4'>
                {/* FROM */}
                <div className='w-full'>
                  <p>
                    {t('From')} <span className='text-red'>*</span>
                  </p>
                  <div className='flex flex-row items-start justify-center gap-4'>
                    <div className='w-full'>
                      <p className='text-dark-grey text-[12px]'>{t('Month')}</p>
                      <select
                        name='fromMonth'
                        id='fromMonth'
                        value={myData.fromMonth}
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
                      {errors.fromMonth && (
                        <p className='text-red mt-1 text-xs'>
                          {errors.fromMonth}
                        </p>
                      )}
                    </div>
                    <div className='w-full'>
                      <p className='text-dark-grey text-[12px]'>{t('Year')}</p>
                      <select
                        name='fromYear'
                        id='fromYear'
                        value={myData.fromYear}
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
                      {errors.fromYear && (
                        <p className='text-red mt-1 text-xs'>
                          {errors.fromYear}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* TO */}
                <div className='w-full'>
                  <p>
                    {t('To')} <span className='text-red'>*</span>
                  </p>
                  <div className='flex flex-row items-start justify-center gap-4'>
                    <div className='w-full'>
                      <p className='text-dark-grey text-[12px]'>{t('Month')}</p>
                      <select
                        name='toMonth'
                        id='toMonth'
                        value={myData.toMonth}
                        onChange={handleChange}
                        disabled={checked}
                        className={cn(
                          'focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900',
                          {
                            'bg-dark-grey': checked === true,
                            '': checked === false,
                          }
                        )}
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
                        <option value='12'>11</option>
                        <option value='12'>12</option>
                      </select>
                      {errors.toMonth && checked === false ? (
                        <p className='text-red mt-1 text-xs'>
                          {errors.toMonth}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className='w-full'>
                      <p className='text-dark-grey text-[12px]'>{t('Year')}</p>
                      <select
                        name='toYear'
                        id='toYear'
                        value={myData.toYear}
                        onChange={handleChange}
                        disabled={checked}
                        className={cn(
                          'focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900',
                          {
                            'bg-dark-grey': checked === true,
                            '': checked === false,
                          }
                        )}
                      >
                        {Array.from(
                          { length: new Date().getFullYear() - 1999 + 4 },
                          (_, index) => {
                            const year = new Date().getFullYear() + index - 24;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          }
                        )}
                      </select>
                      {errors.toYear && checked === false ? (
                        <p className='text-red mt-1 text-xs'>{errors.toYear}</p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional */}
              <div>
                <p>{t('Additional')}</p>
                <input
                  type='text'
                  name='details'
                  value={myData.details}
                  onChange={handleChange}
                  id='default-input'
                  className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  placeholder={t('Additional details')}
                  required
                />
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

export default ModalEducation;
