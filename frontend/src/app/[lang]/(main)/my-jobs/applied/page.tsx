'use client';

import { useQuery } from '@apollo/client';

import ListAppliedJob from '@/components/MyJobPage/ListAppliedJob';
import Navigation from '@/components/MyJobPage/Navigation';
import {
  GET_EMPLOYEE_JOBS_APPLIED,
  JobApplicationResponse,
} from '@/graphql/jobs-applied';

export default function ProfilePage() {
  const { data } = useQuery<JobApplicationResponse>(GET_EMPLOYEE_JOBS_APPLIED);
  console.log('data', data);

  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
        <Navigation selected='applied' />
        <ListAppliedJob
          jobs={data?.jobApplications.map((item) => item.job) || []}
        />
      </section>
    </main>
  );
}
