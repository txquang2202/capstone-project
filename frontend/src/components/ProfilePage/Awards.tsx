import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

import { IconEdit, IconPlusCircle, IconTrash2 } from '@/components/Icons';
import Card from '@/components/ProfilePage/Card';
import { UPDATE_AWARD_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';

import { useAwardData } from './Context/AwardContext';
import { usePointData } from './Context/PointContext';
import ModalAwards from './Modal/ModalAwards';

function Awards() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLocale();
  const { authUser } = useAuthData();
  const { setAwData } = usePointData();

  const { dataAward, setDataAward } = useAwardData();

  if (dataAward.awardName) setAwData(25);
  else setAwData(0);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  const [updateAward] = useMutation(UPDATE_AWARD_USER);

  const handleDelete = async () => {
    const deleteDataEdu = {
      awardName: '',
      awardOrg: '',
      awardMonth: '',
      awardYear: '',
      awardDesc: '',
    };
    try {
      await updateAward({
        variables: {
          input: {
            attributes: {
              awardName: '',
              awardOrg: '',
              awardMonth: '',
              awardYear: '',
              awardDesc: '',
            },
          },
          updateUserId: authUser?.id,
        },
      });
      setDataAward(deleteDataEdu);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      {dataAward.awardName ? (
        <div className='mt-6 rounded-md bg-[#ffff] shadow-md'>
          <div className='flex flex-row flex-wrap items-start justify-between px-7 pt-7'>
            <div>
              <span className='text-2xl font-bold'>{t('Awards')}</span>
            </div>
            <div className='flex flex-row'>
              <span className='ml-4 cursor-pointer'>
                <button onClick={openModal}>
                  {dataAward ? (
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
                <h4 className='font-bold'>{dataAward.awardName}</h4>
                <div className='flex gap-2'>
                  <IconTrash2
                    size={18}
                    className='text-rich-grey cursor-pointer'
                    onClick={() => handleDelete()}
                  />
                </div>
              </div>
              <p className='mt-2'>{dataAward.awardOrg}</p>
              <p className='mt-2'>
                <span>
                  {dataAward.awardMonth}/{dataAward.awardYear}
                </span>
              </p>
              <p className='mt-2 text-[14px]'>{dataAward.awardDesc}</p>
            </div>
          </div>
        </div>
      ) : (
        <Card
          title={t('Awards')}
          description={t('Highlight your awards or recognitions')}
          imageUrl='https://itviec.com/assets/profile/award_no_info-0a31e0f6a55c3e2b6131000b7c09eab0182d74ab3f6461d604ba495d1cd42571.svg'
          onToggle={showModal ? closeModal : openModal}
        />
      )}

      {/* Modal */}
      {showModal && <ModalAwards closeModal={closeModal} />}
    </div>
  );
}

export default Awards;
