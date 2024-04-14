'use client';

import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

import { EditJob } from '@/components/Employer';
import { GET_JOB, GetJobResponse, GetJobVariable } from '@/graphql/job';

export default function Page() {
  const params = useParams();
  const { data, loading } = useQuery<GetJobResponse, GetJobVariable>(GET_JOB, {
    variables: { jobId: params?.id as string },
  });

  if (loading) return <div>Loading...</div>;

  if (!data?.job) return <div>Not found</div>;

  return (
    <div className='mx-[100px] my-10 rounded shadow'>
      <EditJob job={data.job} />
    </div>
  );
}
