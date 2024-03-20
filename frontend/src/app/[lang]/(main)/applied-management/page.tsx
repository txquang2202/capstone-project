'use client';

import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

// import CompanyCard from '@/components/CompanyPage/CompanyCard';
import { IconFilter } from '@/components/Icons';
import JobAppliedDetails from '@/components/JobAppliedManagementPage/JobAppliedDetails';
import JobAppliedItem from '@/components/JobAppliedManagementPage/JobAppliedItem';
import { GET_JOBS_APPLIED } from '@/graphql/jobs-applied';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';
import { JobApplication } from '@/types/job';

export default function JobManageMentPage() {
  const { authUser } = useAuthData();

  const [getJobsApplied, { loading, error, data }] =
    useLazyQuery(GET_JOBS_APPLIED);
  console.log('data', data);
  const [selectedJob, setSelectedJob] = useState<JobApplication | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<JobApplication[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const { t } = useLocale();

  useEffect(() => {
    if (authUser && authUser.companyId) {
      console.log('authUser.companyId', authUser.companyId);
      getJobsApplied({
        variables: {
          companyId: authUser.companyId,
        },
      });
    }
  }, [authUser, getJobsApplied]);

  React.useEffect(() => {
    if (!loading && !error && data) {
      setAppliedJobs(JSON.parse(JSON.stringify(data.companyJobApplications)));
    }
  }, [loading, error, data]);

  const countAppliedJobs = appliedJobs.length;
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value === 'all' ? null : event.target.value);
  };

  const filteredJobs = filterStatus
    ? appliedJobs.filter((job) => job.status === filterStatus)
    : appliedJobs;

  const handleJobSelect = (job: JobApplication) => {
    console.log(selectedJob?.id);
    setSelectedJob(job);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleStatusUpdate = (newStatus: string) => {
    if (selectedJob) {
      const updatedJobs = appliedJobs.map((job) =>
        job.id === selectedJob.id ? { ...job, status: newStatus } : job
      );
      setSelectedJob((job) => {
        if (!job) return job;
        return { ...job, status: newStatus };
      });
      setAppliedJobs([...updatedJobs]);
    }
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
                    <option value='Accepted'>Accepted</option>
                    <option value='Submitting'>Submitting</option>
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
                    imageUrl={job.user.imgUrl}
                    timePosted={formatDate(job.date_apply.toString())}
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
                id={selectedJob.id}
                title={selectedJob.job.name}
                imageUrl={selectedJob.user.imgUrl}
                applicantName={
                  selectedJob.user.firstName + ' ' + selectedJob.user.lastName
                }
                applicantEmail={selectedJob.user.email}
                applicationDate={formatDate(selectedJob.date_apply.toString())}
                status={selectedJob.status}
                coverLetter={selectedJob.cover_letter}
                nameCV={selectedJob.cv}
                onUpdateStatus={handleStatusUpdate}
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
