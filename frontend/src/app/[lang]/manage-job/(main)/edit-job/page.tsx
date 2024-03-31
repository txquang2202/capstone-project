'use client';

import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { JobItem } from '@/components/Search';
import { routes } from '@/configs/router';
import { GET_JOB_COMPANY } from '@/graphql/job';
import useAppRouter from '@/hooks/useAppRouter';
import useAuthData from '@/hooks/useAuthData';
import { Job } from '@/types/job';

export default function Page() {
  const { authUser } = useAuthData();
  const [getJobCompany, { loading, error, data }] =
    useLazyQuery(GET_JOB_COMPANY);
  console.log('dat', data);
  const [jobCompany, setJobComany] = useState<Job[]>([]);
  const router = useAppRouter();
  useEffect(() => {
    if (authUser && authUser.companyId) {
      console.log('authUser.companyId', authUser.companyId);
      getJobCompany({
        variables: {
          jobCompanyId: authUser.companyId,
        },
      });
    }
  }, [authUser, getJobCompany]);
  React.useEffect(() => {
    if (!loading && !error && data) {
      setJobComany(JSON.parse(JSON.stringify(data.jobCompany)));
    }
  }, [loading, error, data]);

  return (
    <div className='grid grid-cols-3 gap-4 p-5'>
      {jobCompany.map((job) => (
        <div key={job.id} className='rounded shadow'>
          <JobItem
            {...job}
            onSelect={() =>
              router.push(routes.employerEditJob.pathParams({ id: job.id }))
            }
          />
        </div>
      ))}
    </div>
  );
}
