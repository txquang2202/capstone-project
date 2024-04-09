'use client';

import { differenceInDays, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';

import EmptyField from '@/components/MyJobPage/EmptyField';
import JobCard from '@/components/MyJobPage/JobCard';
import ComboBox from '@/components/MyJobPage/SortBox';
import { useLocale } from '@/locale';
import { Job } from '@/types/job';

type Props = {
  jobs: Job[];
};

export default function ListAppliedJob({ jobs }: Props) {
  const countJob = jobs.length;
  const [sortedJobs, setSortedJobs] = useState<Job[]>([]);
  const { t, locale } = useLocale();
  const options = locale === 'en' ? optionsEn : optionsVi;

  useEffect(() => {
    setSortedJobs(jobs);
  }, [jobs]);

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
                postedAgo={differenceInDays(
                  new Date(),
                  parseISO(job.date_posted.toString())
                )}
                title={job.name}
                companyName={job.company.company_name}
                urlJob='/it-jobs/all'
                companyLogoUrl='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOFJ2REE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--14aa549a41c86d594cd70cb51fa1407717a12c97/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/fastboy-marketing-logo.png'
                urlCompany='/companies'
                tags={JSON.parse(job.skills)}
                expires={10}
                isLiked={false}
                isApplied={true}
                workingType={job.working_type}
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
