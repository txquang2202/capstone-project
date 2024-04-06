import React from 'react';

import ProfileCard from '@/components/ProfilePage/ProfileCard';

import AboutMe from './AboutMe';
import Awards from './Awards';
import Education from './Education';

function Infor() {
  return (
    <div className='w-full max-w-[calc(100%-48px)] md:w-[900px]'>
      <ProfileCard />

      {/* Detail information */}
      <div className='mt-6'>
        <AboutMe />
        <Education />
        <Awards />
      </div>
    </div>
  );
}

export default Infor;
