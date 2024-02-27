'use client';

import { useState } from 'react';

import EmptyField from '@/components/MyJobPage/EmptyField';
import JobCard from '@/components/MyJobPage/JobCard';
import ComboBox from '@/components/MyJobPage/SortBox';
import { useLocale } from '@/locale';

export default function ListAppliedJob() {
  const countJob = jobs.length;
  const [sortedJobs, setSortedJobs] = useState(jobs);
  const { t, locale } = useLocale();
  const options = locale === 'en' ? optionsEn : optionsVi;

  return (
    <div className='bg-[#f2f2f2] py-[24px]'>
      <div className='container-xxl  px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-row flex-wrap items-center justify-center gap-2 sm:justify-center md:justify-center lg:justify-between xl:justify-between 2xl:justify-between'>
          <h1 className='text-2xl'>
            {t('Applied Jobs ')} ({countJob})
          </h1>
          <div className='flex flex-wrap items-center gap-2'>
            <p>{t('Sort by')}</p>
            <ComboBox
              options={options}
              jobs={jobs}
              setSortedJobs={setSortedJobs}
            />
          </div>
        </div>
      </div>
      <div className='container-xxl mt-6 px-4 sm:px-6 lg:px-8'>
        {countJob > 0 ? (
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {sortedJobs.map((job, index) => (
              <JobCard
                key={index}
                postedAgo={job.postedAgo}
                title={job.title}
                companyName={job.companyName}
                urlJob={job.urlJob}
                companyLogoUrl={job.companyLogoUrl}
                urlCompany={job.urlCompany}
                tags={job.tags}
                expires={job.expires}
                isLiked={job.isLike}
              />
            ))}
          </div>
        ) : (
          <EmptyField title='Saved Jobs' />
        )}
      </div>
    </div>
  );
}

const optionsEn = ['Lastest application date', 'Furthest application date'];
const optionsVi = ['Ngày ứng tuyển gần nhất', 'Ngày ứng tuyển xa nhất'];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jobs: any[] = [
  // {
  //   postedAgo: 34,
  //   title: 'Frontend Developer (ReactJS, Javascript)',
  //   companyName: 'Fastboy Marketing',
  //   urlJob: '#!',
  //   companyLogoUrl:
  //     'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOFJ2REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--14aa549a41c86d594cd70cb51fa1407717a12c97/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/fastboy-marketing-logo.png',
  //   urlCompany: '#!',
  //   tags: ['JavaScript', 'ReactJS'],
  //   expires: 12,
  //   isLike: true,
  // },
  // {
  //   postedAgo: 32,
  //   title: 'Junior/Fresher Front-end Developer (JavaScript/ReactJS)',
  //   companyName: 'CÔNG TY TNHH OVEN',
  //   urlJob: '#!',
  //   companyLogoUrl:
  //     'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNHExSkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bb813ef75e71e9c8491335abfd54a30f4bfbeb13/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/oven-logo.jpg',
  //   urlCompany: '#!',
  //   tags: ['JavaScript', 'ReactJS', 'English'],
  //   expires: 18,
  //   isLike: true,
  // },
  // {
  //   postedAgo: 3,
  //   title: 'Senior Full stack Dev (Angular/JavaScript/TypeScript)',
  //   companyName: 'Ada Beat Vietnam',
  //   urlJob: '#!',
  //   companyLogoUrl:
  //     'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOXpwTkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--197eee81ae4cf3685e2af32f948f13a4d499102f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/t%E1%BA%A3i%20xu%E1%BB%91ng%20-%20Hong%20Thi%20Tran.png',
  //   urlCompany: '#!',
  //   tags: ['Angular', 'JavaScript', 'TypeScript'],
  //   expires: 31,
  //   isLike: true,
  // },
];
