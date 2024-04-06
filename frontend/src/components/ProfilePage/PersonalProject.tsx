import React, { useState } from 'react';

import Card from '@/components/ProfilePage/Card';
import { useLocale } from '@/locale';

import ModalPerProject from './Modal/ModalPerProject';

function PersonalProject() {
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
        title={t('Personal Project')}
        description={t('Showcase your personal project')}
        imageUrl='https://itviec.com/assets/profile/project_no_info-393d7f7ad578814bcce189f5681ba7e90f6a33343cdb0172eb9761ece4094b5d.svg'
        onToggle={showModal ? closeModal : openModal}
      />
      {/* Modal */}
      {showModal && <ModalPerProject closeModal={closeModal} />}
    </div>
  );
}

export default PersonalProject;
