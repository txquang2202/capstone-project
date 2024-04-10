'use client';

import { useQuery } from '@apollo/client';

import ListSavedJob from '@/components/MyJobPage/ListSavedJob';
import Navigation from '@/components/MyJobPage/Navigation';
import { GET_SAVED_JOBS, SavedJobResponse } from '@/graphql/job-save';

export default function ProfilePage() {
  const { data } = useQuery<SavedJobResponse>(GET_SAVED_JOBS);

  return (
    <main>
      <section className='scroll-smooth bg-[#f2f2f2]  focus:scroll-auto'>
        <Navigation selected='my-jobs' />
        <ListSavedJob jobs={data?.savedJobs.map((item) => item) || []} />
      </section>
    </main>
  );
}
