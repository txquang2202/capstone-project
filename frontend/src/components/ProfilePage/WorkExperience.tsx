import React, { useState } from 'react';

import Card from '@/components/ProfilePage/Card';
import { useLocale } from '@/locale';

import ModalWork from './Modal/ModalWork';

function WorkExperience() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLocale();

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-y-hidden');
  };
  return (
    <div>
      <Card
        title={t('Work Experience')}
        description={t('Highlight detailed information about your job history')}
        imageUrl='https://itviec.com/assets/profile/experience_no_info-c25e08f6ba4db4a16e0b948d42a90451c7895790324da6420ffeba9525c9c6eb.svg'
        onToggle={showModal ? closeModal : openModal}
      />
      {/* Modal */}
      {showModal && <ModalWork closeModal={closeModal} />}
    </div>
  );
}

export default WorkExperience;
