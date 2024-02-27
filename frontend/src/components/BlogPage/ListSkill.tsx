'use client';

import Link from 'next/link';

export default function ListSkill() {
  return (
    <div className='container-xxl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='flex flex-row items-start justify-start'>
        <h2 className='text-3xl font-medium'>Kỹ năng IT được săn đón</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div className='mt-6 grid grid-flow-col grid-cols-2 grid-rows-9 gap-4'>
          {skills.slice(0, 18).map((skill, index) => (
            <Link key={index} href='#!' className='hover:text-red'>
              {skill}
            </Link>
          ))}
        </div>
        <div className='mt-6 grid grid-flow-col grid-cols-2 grid-rows-9 gap-4'>
          {skills.slice(18).map((skill, index) => (
            <Link key={index} href='#!' className='hover:text-red'>
              {skill}
            </Link>
          ))}
          <a
            href='#!'
            className='hover:text-dark-red  text-red font-medium underline underline-offset-4 '
          >
            Xem tất cả kỹ năng IT
          </a>
        </div>
      </div>
    </div>
  );
}

const skills = [
  'Java',
  'PHP',
  'JavaScript',
  'HTML5',
  'Manager',
  'SQL',
  'Android',
  'iOS',
  'MySQL',
  'Tester',
  'English',
  'Ruby',
  'Python',
  'Mobile Apps',
  'Ruby on Rails',
  'QA QC',
  'Database',
  '.NET',
  'Business Analyst',
  'Linux',
  'Team Leader',
  'NodeJS',
  'System Engineer',
  'Designer',
  'UI-UX',
  'Project Manager',
  'OOP',
  'Oracle',
  'MVC',
  'ReactJS',
  'Embedded',
  'J2EE',
];
