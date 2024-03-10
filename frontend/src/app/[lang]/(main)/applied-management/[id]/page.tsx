'use client';

import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

// import CompanyCard from '@/components/CompanyPage/CompanyCard';
import { IconFilter } from '@/components/Icons';
import JobAppliedDetails from '@/components/JobAppliedManagementPage/JobAppliedDetails';
import JobAppliedItem from '@/components/JobAppliedManagementPage/JobAppliedItem';
import { GET_JOBS_APPLIED } from '@/graphql/jobs-applied';
import { useLocale } from '@/locale';

interface Job {
  id: string;
  cv: string;
  cover_letter: string;
  date_apply: string;
  status: string;
  job: {
    name: string;
  };
  user: {
    name: string;
    email: string;
    img_url: string;
  };
}

export default function JobManageMentPage({
  params,
}: {
  params: { id: string };
}) {
  const companyId = params.id;
  const { loading, error, data } = useQuery(GET_JOBS_APPLIED, {
    variables: { companyId },
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const { t } = useLocale();

  React.useEffect(() => {
    if (!loading && !error && data) {
      setAppliedJobs(data.companyJobApplications);
    }
  }, [loading, error, data]);

  const countAppliedJobs = appliedJobs.length;
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value === 'all' ? null : event.target.value);
  };

  const filteredJobs = filterStatus
    ? appliedJobs.filter((job) => job.status === filterStatus)
    : appliedJobs;

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
        {/* Info Company */}
        {/* <CompanyCard /> */}
        {/* <Navigation selected='' /> */}
        {/* <AppliedManagement params={{ id }} /> */}
        <div className='container-xxl grid grid-cols-1 gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
          {/* left */}
          <div className='col-span-2 rounded-md border border-gray-200 bg-white shadow-sm md:col-span-2 lg:col-span-1'>
            <div className='container-xxl bg-red rounded-t-md px-6 py-3'>
              <div className='flex flex-row flex-wrap items-center justify-between'>
                <p className='text-[16px] font-[600] text-white'>
                  {t('You have')} {countAppliedJobs} {t('application forms')}
                </p>
                <div className='hover:bg-light-red relative  rounded-full p-2 '>
                  <IconFilter className=' h-4  w-4 text-white' />
                  <select
                    className='absolute inset-0 cursor-pointer opacity-0'
                    onChange={handleFilterChange}
                  >
                    <option value='all'>All</option>
                    <option value='Hired'>Hired</option>
                    <option value='Submitting'>Submitting</option>
                    <option value='Interviewing'>Interviewing</option>
                  </select>
                </div>
              </div>
            </div>
            <hr className='h-[1px] w-full border-none bg-gray-200' />
            <div className=' h-[700px] overflow-y-auto'>
              {filteredJobs.length === 0 ? (
                <p className='py-4 text-center text-gray-500'>
                  {t('You have 0 applied job')}
                </p>
              ) : (
                filteredJobs.map((job) => (
                  <JobAppliedItem
                    key={job.id}
                    title={job.job.name}
                    imageUrl={job.user.img_url}
                    timePosted={formatDate(job.date_apply)}
                    description={job.cover_letter}
                    status={job.status}
                    onSelect={() => handleJobSelect(job)}
                    isSelected={selectedJob?.id === job.id}
                  />
                ))
              )}
            </div>
          </div>

          {/* right */}
          <div className='col-span-1  flex flex-col justify-center md:col-span-2 lg:col-span-2'>
            {selectedJob ? (
              <JobAppliedDetails
                title={selectedJob.job.name}
                imageUrl={selectedJob.user.img_url}
                applicantName={selectedJob.user.name}
                applicantEmail={selectedJob.user.email}
                applicationDate={formatDate(selectedJob.date_apply)}
                status={selectedJob.status}
                coverLetter={selectedJob.cover_letter}
                nameCV={selectedJob.cv}
              />
            ) : (
              <p className='py-4 text-center text-gray-500'>
                {t("You haven't chosen applied job yet!")}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
