'use client';

import Card from '@/components/ProfilePage/Card';
import Navigation from '@/components/ProfilePage/Navigation';
import ProfileCard from '@/components/ProfilePage/ProfileCard';
import RatingCard from '@/components/ProfilePage/RatingCard';

export default function ProfilePage() {
  return (
    <div className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
      <Navigation selected='profile' />

      {/* content */}
      <main className=' bg-[#f2f2f2]  py-[24px]'>
        <div className='flex flex-row flex-wrap items-start justify-center gap-[24px]'>
          {/* left content*/}
          <RatingCard percent={90} />
          {/* right content*/}
          <div className='w-full max-w-[calc(100%-48px)] md:w-[900px]'>
            <ProfileCard
              username='John Doe'
              email='johndoe@example.com'
              birthdate='01/01/1990'
              location='New York'
              phoneNumber='123-456-7890'
              gender='Male'
              avatarSrc='https://itviec.com/assets/avatar-default-092d31fefdf639c5a2cad357c47b67a836df63fd29359c2e695a173a3d837389.svg'
              link='https://tailwindcss.com/docs/responsive-design'
            />

            {/* Detail information */}
            <div className='mt-6'>
              <Card
                title='About Me'
                description='Introduce your strengths and years of experience'
                imageUrl='https://itviec.com/assets/profile/about_me_no_info-c7c9aa8f95cc149ec7646e171c59c2d261d0c9d62da0f5b1fff75886691bd8e9.svg'
                isOpen
              />
              <Card
                title='Education'
                description='Share your background education'
                imageUrl='https://itviec.com/assets/profile/education_no_info-73d159c5c97d90ff0cdd22764fdde92a6ecefaa39c1f68775ba3e126e8ee6140.svg'
                isOpen
              />
              <Card
                title='Work Experience'
                description='Highlight detailed information about your job history'
                imageUrl='https://itviec.com/assets/profile/experience_no_info-c25e08f6ba4db4a16e0b948d42a90451c7895790324da6420ffeba9525c9c6eb.svg'
                isOpen
              />
              <Card
                title='Skills'
                description='Showcase your skills and proficiencies'
                imageUrl='https://itviec.com/assets/profile/skill_no_info-02f56fa0a5b0ab2ae7d233ceac098f1102a4f774de22f70b0c81fd8e1fb9efbf.svg'
                isOpen
              />
              <Card
                title='Personal Project'
                description='Showcase your personal project'
                imageUrl='https://itviec.com/assets/profile/project_no_info-393d7f7ad578814bcce189f5681ba7e90f6a33343cdb0172eb9761ece4094b5d.svg'
                isOpen
              />
              <Card
                title='Certificates'
                description='Provides evidence of your specific expertise and skills'
                imageUrl='https://itviec.com/assets/profile/certificate_no_info-26fedfa95c272adfe65f1136c3c04973002bea978cc21f91d04f7ce81caeda3f.svg'
                isOpen
              />
              <Card
                title='Awards'
                description='Highlight your awards or recognitions'
                imageUrl='https://itviec.com/assets/profile/award_no_info-0a31e0f6a55c3e2b6131000b7c09eab0182d74ab3f6461d604ba495d1cd42571.svg'
                isOpen
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
