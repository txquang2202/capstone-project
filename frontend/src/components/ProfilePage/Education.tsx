import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

import { IconEdit, IconPlusCircle, IconTrash2 } from '@/components/Icons';
import Card from '@/components/ProfilePage/Card';
import { UPDATE_EDUCATION_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';

import { useEducationData } from './Context/EducationContenxt';
import { usePointData } from './Context/PointContext';
import ModalEducation from './Modal/ModalEducation';

function Education() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLocale();
  const { authUser } = useAuthData();
  const { dataEdu, setDataEdu } = useEducationData();
  const { setEdata } = usePointData();

  if (dataEdu.school) setEdata(25);
  else setEdata(0);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  const [updateEdu] = useMutation(UPDATE_EDUCATION_USER);

  const handleDelete = async () => {
    const deleteDataEdu = {
      school: '',
      major: '',
      fromMonth: '',
      fromYear: '',
      toMonth: '',
      toYear: '',
      details: '',
    };

    try {
      await updateEdu({
        variables: {
          input: {
            attributes: {
              school: '',
              major: '',
              fromMonth: '',
              fromYear: '',
              toMonth: '',
              toYear: '',
              details: '',
            },
          },
          updateUserId: authUser?.id,
        },
      });
      setDataEdu(deleteDataEdu);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      {dataEdu.school ? (
        <>
          <div className='mt-6 rounded-md bg-[#ffff] shadow-md'>
            <div className='flex flex-row flex-wrap items-start justify-between px-7 pt-7'>
              <div>
                <span className='text-2xl font-bold'>{t('Education')}</span>
              </div>
              <div className='flex flex-row'>
                <span className='ml-4 cursor-pointer'>
                  <button onClick={openModal}>
                    {dataEdu ? (
                      <IconEdit size={20} className='text-red' />
                    ) : (
                      <IconPlusCircle size={20} color='var(--primary)' />
                    )}
                  </button>
                </span>
              </div>
            </div>
            <div className='mt-4 px-7'>
              <hr className='text-silver-grey' />
            </div>
            <div className='px-7 pb-7'>
              <div className='mt-4'>
                <div className='mt-4 flex flex-row justify-between'>
                  <h4 className='font-bold'>{dataEdu.school}</h4>
                  <div className='flex gap-2'>
                    <IconTrash2
                      size={18}
                      className='text-rich-grey cursor-pointer'
                      onClick={() => handleDelete()}
                    />
                  </div>
                </div>
                <p className='mt-2'>{dataEdu.major}</p>
                <p className='mt-2'>
                  <span>
                    {dataEdu.fromMonth}/{dataEdu.fromYear}
                  </span>
                  <span> - </span>
                  {dataEdu.toMonth === '' || dataEdu.toYear === '' ? (
                    <span>NOW</span>
                  ) : (
                    <span>
                      {dataEdu.toMonth}/{dataEdu.toYear}
                    </span>
                  )}
                </p>
                <p className='mt-2 text-[14px]'>{dataEdu.details}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Card
          title={t('Education')}
          description={t('Share your background education')}
          imageUrl='https://itviec.com/assets/profile/education_no_info-73d159c5c97d90ff0cdd22764fdde92a6ecefaa39c1f68775ba3e126e8ee6140.svg'
          onToggle={showModal ? closeModal : openModal}
        />
      )}

      {/* Modal */}
      {showModal && <ModalEducation closeModal={closeModal} />}
    </div>
  );
}

export default Education;
