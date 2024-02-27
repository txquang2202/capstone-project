import Image from 'next/image';
import React from 'react';

import {
  IconEdit,
  IconGift,
  IconGlobe,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUser,
} from '@/components/Icons';

interface ProfileCardProps {
  username: string;
  email: string;
  birthdate: string;
  location: string;
  phoneNumber: string;
  gender: string;
  avatarSrc: string;
  link: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  email,
  birthdate,
  location,
  phoneNumber,
  gender,
  avatarSrc,
  link,
}) => {
  return (
    <div className='rounded-md bg-[#ffff] shadow-md'>
      <div className='flex flex-row flex-wrap justify-center px-4 pb-6 pt-6'>
        {/* avatar */}
        <div className='flex w-[180px] items-start justify-center p-2'>
          <Image
            width={110}
            height={110}
            className='rounded-full'
            alt='Avatar Profile'
            src={avatarSrc}
          />
        </div>

        {/* information */}
        <div className='w-[680px] '>
          {/* Username */}
          <div className='flex flex-row justify-between'>
            <h2>{username}</h2>

            {/* icon edit */}
            <div className='cursor-pointer'>
              <IconEdit className='text-red h-5 w-5' />
            </div>
          </div>
          <div className='mt-4 font-bold'>frontend</div>

          {/* profile */}
          <div className='mt-4'>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
              <div className='flex flex-grow items-center gap-2'>
                <IconMail className='h-4 w-4' />
                <p>{email}</p>
              </div>
              <div className='flex flex-grow items-center gap-2'>
                <IconGift className='h-4 w-4' />
                <p>{birthdate}</p>
              </div>
              <div className='flex flex-grow items-center gap-2'>
                <IconMapPin className='h-4 w-4' />
                <p>{location}</p>
              </div>
              <div className='flex flex-grow items-center gap-2'>
                <IconPhone className='h-4 w-4' />
                <p>{phoneNumber}</p>
              </div>
              <div className='flex flex-grow items-center gap-2'>
                <IconUser className='h-4 w-4' />
                <p>{gender}</p>
              </div>
              <div className='flex flex-grow items-center gap-2'>
                <IconGlobe className='h-4 w-4' />
                <a
                  href={link}
                  className='truncate'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
