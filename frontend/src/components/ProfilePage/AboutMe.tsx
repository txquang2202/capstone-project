import { useMutation } from '@apollo/client';
import React from 'react';

import { IconPlusCircle, IconTrash2 } from '@/components/Icons';
import Card from '@/components/ProfilePage/Card';
import { UPDATE_ABOUTME_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';

import { useAboutMeData } from './Context/AboutMeContext';
import { usePointData } from './Context/PointContext';
import ModalAboutMe from './Modal/ModalAboutMe';

function AboutMe() {
  const { t } = useLocale();
  const { textEditorContent, setTextEditorContent } = useAboutMeData();
  const [showModal, setShowModal] = React.useState(false);
  const { setAdata } = usePointData();
  const { authUser } = useAuthData();

  if (textEditorContent) setAdata(25);
  else setAdata(0);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const [updateUserMutation] = useMutation(UPDATE_ABOUTME_USER);

  const handleDelete = async () => {
    const deleteText = '';
    try {
      await updateUserMutation({
        variables: {
          input: {
            attributes: {
              aboutMe: deleteText,
            },
          },
          updateUserId: authUser?.id,
        },
      });
      setTextEditorContent(deleteText);
      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  return (
    <div>
      {textEditorContent ? (
        <>
          <div className='mt-6 rounded-md bg-[#ffff] shadow-md'>
            <div className='flex flex-row flex-wrap items-start justify-between px-7 pt-7'>
              <div>
                <span className='text-2xl font-bold'>{t('About Me')}</span>
              </div>
              <div className='flex flex-row'>
                <span className='ml-4 cursor-pointer'>
                  <button onClick={openModal}>
                    <IconPlusCircle size={20} color='var(--primary)' />
                  </button>
                </span>
              </div>
            </div>
            <div className='mt-4 px-7'>
              <hr className='text-silver-grey' />
            </div>
            <div className='mt-5 flex items-start justify-between px-7 pb-7'>
              <p>
                <div dangerouslySetInnerHTML={{ __html: textEditorContent }} />
              </p>
              <IconTrash2
                size={18}
                className='text-rich-grey cursor-pointer'
                onClick={() => handleDelete()}
              />
            </div>
          </div>
        </>
      ) : (
        <Card
          title={t('About Me')}
          description={t('Introduce your strengths and years of experience')}
          imageUrl='https://itviec.com/assets/profile/about_me_no_info-c7c9aa8f95cc149ec7646e171c59c2d261d0c9d62da0f5b1fff75886691bd8e9.svg'
          onToggle={showModal ? closeModal : openModal}
        />
      )}

      {showModal && <ModalAboutMe closeModal={closeModal} />}
    </div>
  );
}

export default AboutMe;
