'use client';

import { useSuspenseQuery } from '@apollo/client';

import { JobItem } from '@/components/Search';
import { routes } from '@/configs/router';
import { GET_JOBS } from '@/graphql/job';
import useAppRouter from '@/hooks/useAppRouter';
import { Job } from '@/types/job';

export default function Page() {
  const {
    data: { jobs },
  } = useSuspenseQuery<DataResponse<'jobs', Job[]>>(GET_JOBS);
  const router = useAppRouter();

  return (
    <div className='grid grid-cols-3 gap-4 p-5'>
      {jobs.map((job) => (
        <div key={job.id} className='rounded shadow'>
          <JobItem
            {...job}
            onSelect={() =>
              router.push(routes.customerJobDetail.pathParams({ id: job.id }))
            }
          />
        </div>
      ))}
    </div>
  );
}
