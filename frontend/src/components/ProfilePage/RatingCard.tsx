import Image from 'next/image';
import React, { useState } from 'react';

import { IconPlusCircle } from '@/components/Icons';
import { useLocale } from '@/locale';

import { usePointData } from './Context/PointContext';
import ModalAboutMe from './Modal/ModalAboutMe';
import ModalAwards from './Modal/ModalAwards';
import ModalEducation from './Modal/ModalEducation';
import ModalPerProject from './Modal/ModalPerProject';
import ModalWork from './Modal/ModalWork';

const RatingCard: React.FC = () => {
  const { t } = useLocale();

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const { sumData } = usePointData();

  const toggleShowModal = (type: string) => {
    setModalType(type);
    setShowModal(!showModal);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setModalType(null);
    setShowModal(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  return (
    <div>
      <div className='w-[300px] rounded-md bg-[#ffff] p-5 shadow-md sm:static  md:static lg:sticky xl:sticky xl:top-24 2xl:sticky 2xl:top-24'>
        {/* start percent */}
        <div className='border-gray-250 flex flex-row items-start justify-center gap-5 border-b-[1px] p-2'>
          {/* start */}
          <div className='relative h-[84px] w-[84px] '>
            <svg
              className='h-full w-full'
              width='36'
              height='36'
              viewBox='0 0 36 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                className='stroke-current text-slate-50'
                strokeWidth='2'
              ></circle>

              <g className='origin-center -rotate-90 transform'>
                <circle
                  cx='18'
                  cy='18'
                  r='16'
                  fill='none'
                  className='text-yellow  stroke-current transition-all'
                  strokeWidth='3'
                  strokeDasharray='100'
                  strokeDashoffset={100 - sumData}
                ></circle>
              </g>
            </svg>
            <div className='absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
              <div className='border-silver-grey rounded-full border-4 text-center'>
                <div className='p-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#eb9818'
                    viewBox='0 0 24 24'
                    width='38px'
                    height='38px'
                  >
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                    <path d='M0 0h24v24H0z' fill='none' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* percent */}
          <div className='flex flex-col'>
            <span className='font-semibold'>{t('Profile Strength')}</span>
            <span className='text-yellow text-lg font-bold'>
              {sumData >= 100
                ? 'Superstar'
                : sumData >= 75
                ? 'Excellent'
                : sumData >= 40
                ? 'Good'
                : sumData >= 30
                ? 'Poor'
                : 'Poor'}
            </span>
            {/* Poor, Good, Excellent, Superstar Yay! Your profile is completed! */}
            <span>
              {sumData}% {t('completed')}
            </span>
          </div>
        </div>
        {/* skills */}
        <div className='border-gray-250 border-b-[1px] text-center'>
          <div className='pb-4 pt-4 text-start'>
            <span className='font-semibold'>
              {t('Upgrade profile to "Excellent" to unlock Download CV')}
            </span>

            {/* add item */}
            <div className='flex flex-col justify-center'>
              {/* item 1 */}
              <div
                className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                onClick={() => toggleShowModal('AboutMe')}
              >
                <IconPlusCircle className='h-5 w-5' />
                <span>{t('Add About me')}</span>
              </div>
              <div
                className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                onClick={() => toggleShowModal('Education')}
              >
                <IconPlusCircle className='h-5 w-5' />
                <span>{t('Add Education')}</span>
              </div>
              <div
                className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                onClick={() => toggleShowModal('Awards')}
              >
                <IconPlusCircle className='h-5 w-5' />
                <span>{t('Add Awards')}</span>
              </div>
              {/* <div
                className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                onClick={() => toggleShowModal('Skills')}
              >
                <IconPlusCircle className='h-5 w-5' />
                <span>{t('Add Skills')}</span>
              </div> */}

              {/* item 2 */}
              {/* <div
                className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                onClick={() => toggleShowModal('WorkExperience')}
              >
                <IconPlusCircle className='h-5 w-5' />
                <span>{t('Add Work Experience')}</span>
              </div> */}
              {/* item 3 */}
              {/* <div
                className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                onClick={() => toggleShowModal('Education')}
              >
                <IconPlusCircle className='h-5 w-5' />
                <span>{t('Add Education')}</span>
              </div>
              {showAll ? (
                <>
                  <div
                    className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                    onClick={() => toggleShowModal('Skills')}
                  >
                    <IconPlusCircle className='h-5 w-5' />
                    <span>{t('Add Skills')}</span>
                  </div>

                  <div
                    className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                    onClick={() => toggleShowModal('Certificates')}
                  >
                    <IconPlusCircle className='h-5 w-5' />
                    <span>{t('Add Certificates')}</span>
                  </div>

                  <div
                    className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                    onClick={() => toggleShowModal('Awards')}
                  >
                    <IconPlusCircle className='h-5 w-5' />
                    <span>{t('Add Awards')}</span>
                  </div>

                  <div
                    className='mt-4 flex cursor-pointer  items-center gap-2 text-[#0e2eed] hover:text-[#314091]'
                    onClick={() => toggleShowModal('PersonalProject')}
                  >
                    <IconPlusCircle className='h-5 w-5' />
                    <span>{t('Add Personal Project')}</span>
                  </div>

                  <div
                    className='text-rich-grey mt-4 flex  cursor-pointer items-center gap-2 '
                    onClick={toggleShowAll}
                  >
                    <IconChevronUp className='h-5 w-5' />
                    <span>{t('Show less')}</span>
                  </div>
                </>
              ) : (
                // show more
                <div
                  className='text-rich-grey mt-4 flex  cursor-pointer items-center gap-2 '
                  onClick={toggleShowAll}
                >
                  <IconChevronDown className='h-5 w-5' />
                  <span>{t('Add more information')}</span>
                </div>
              )} */}
            </div>
          </div>
        </div>
        {/* cv */}
        <div className='pb-4 pt-4 text-center'>
          <div className='flex items-center gap-2'>
            <Image
              alt=''
              width={100}
              height={0}
              src='https://itviec.com/assets/profile/cv-d4db00ef4c885c25e437715236babd64c7cbb960ddf4771e69e55dd8169dd5ba.svg'
            />
            <span className='text-start'>
              {t('Explore CV templates and download your CV')}
            </span>
          </div>

          <a
            href='#!'
            className='mt-4 inline-block w-full rounded-md  bg-[#ea1e30] px-4 py-3 font-semibold text-white shadow-md hover:bg-red-700  focus:outline-none'
          >
            {t('Preview & Download CV')}
          </a>
        </div>
      </div>
      {/* Modal */}
      {modalType === 'AboutMe' && <ModalAboutMe closeModal={closeModal} />}
      {modalType === 'WorkExperience' && <ModalWork closeModal={closeModal} />}
      {modalType === 'Education' && <ModalEducation closeModal={closeModal} />}

      {modalType === 'Awards' && <ModalAwards closeModal={closeModal} />}
      {modalType === 'PersonalProject' && (
        <ModalPerProject closeModal={closeModal} />
      )}
    </div>
  );
};

export default RatingCard;
