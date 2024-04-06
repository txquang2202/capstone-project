import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import {
  IconEdit,
  IconGift,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUser,
} from '@/components/Icons';
import { ATRIBUTES_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';

import { usePointData } from './Context/PointContext';
import ModalProfile from './Modal/ModalProfile';

interface UserProfile {
  firstName: string;
  email: string;
  attributes: {
    avatarUrl?: string;
    dob?: string;
    location?: string;
    phone?: string;
    sex?: string;
  };
}

const ProfileCard: React.FC = () => {
  const { authUser } = useAuthData();
  const { loading, error, data } = useQuery(ATRIBUTES_USER, {
    variables: { userId: authUser?.id },
  });
  const [showModal, setShowModal] = useState(false);
  const [dataProfile, setDataProfile] = useState<UserProfile | null>(null);
  const { setPdata } = usePointData();

  if (dataProfile) setPdata(25);
  else setPdata(0);

  useEffect(() => {
    if (!loading && !error && data) {
      setDataProfile(data?.user);
    }
  }, [loading, error, data]);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  const defaultAvatarSrc =
    'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  // Update Infor
  const handleSave = (formData: UserProfile) => {
    setDataProfile((prevData) => ({
      ...prevData,
      email: formData.email,
      firstName: formData.firstName,
      attributes: {
        ...prevData?.attributes,
        avatarUrl: formData.attributes.avatarUrl,
        dob: formData.attributes.dob,
        location: formData.attributes.location,
        phone: formData.attributes.phone,
        sex: formData.attributes.sex,
      },
    }));
  };

  return (
    <div className='rounded-md bg-[#ffff] shadow-md'>
      <div className='flex flex-row flex-wrap justify-center px-4 pb-6 pt-6'>
        {loading ? (
          <img src='/images/loading.gif' alt='loading' className='h-6 w-6' />
        ) : (
          <>
            <div className='flex w-[180px] items-start justify-center p-2'>
              <img
                src={dataProfile?.attributes?.avatarUrl || defaultAvatarSrc}
                alt='Avatar Profile'
                className='h-28 w-28 rounded-full'
              />
            </div>

            <div className='w-[680px] '>
              <div className='flex flex-row justify-between'>
                <h2>{dataProfile?.firstName}</h2>
                <div className='cursor-pointer'>
                  <IconEdit className='text-red h-5 w-5' onClick={openModal} />
                </div>
              </div>

              <div className='mt-4'>
                <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                  <div className='flex flex-grow items-center gap-2'>
                    <IconMail className='h-4 w-4' />
                    <p>{dataProfile?.email}</p>
                  </div>
                  <div className='flex flex-grow items-center gap-2'>
                    <IconGift className='h-4 w-4' />
                    <p>{dataProfile?.attributes?.dob}</p>
                  </div>
                  <div className='flex flex-grow items-center gap-2'>
                    <IconMapPin className='h-4 w-4' />
                    <p>{dataProfile?.attributes?.location}</p>
                  </div>
                  <div className='flex flex-grow items-center gap-2'>
                    <IconPhone className='h-4 w-4' />
                    <p>{dataProfile?.attributes?.phone}</p>
                  </div>
                  <div className='flex flex-grow items-center gap-2'>
                    <IconUser className='h-4 w-4' />
                    <p>{dataProfile?.attributes?.sex}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {showModal && dataProfile && (
        <ModalProfile
          closeModal={closeModal}
          userData={dataProfile}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ProfileCard;
