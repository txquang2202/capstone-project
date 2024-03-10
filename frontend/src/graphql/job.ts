import { gql } from '@apollo/client';

import { type Job } from '@/types/job';

export type GetJobResponse = DataResponse<'job', Job>;
export type GetJobVariable = { jobId: string };

export const GET_JOB = gql`
  query Job($jobId: ID!) {
    job(id: $jobId) {
      id
      name
    }
  }
`;

export const GET_JOBS = gql`
  query Jobs {
    jobs {
      company_id
      company {
        brief_overview
        company_facebook
        company_name
        company_size
        company_type
        company_website
        country
        id
        ot_policy
        overview
        working_day
      }
      country
      date_posted
      id
      is_closed
      job_description
      salary_from
      salary_to
      name
      skill_demand
      skills
      top_3_reason
      why_you_love_working_here
      working_type
    }
  }
`;

export type ApplyJobResponse = DataResponse<'job', Job>;
export type ApplyJobVariable = {
  cover_letter: string;
  cv: string;
  job_id: string;
  user_id: string;
};

export const APPLY_JOBS = gql`
  mutation Mutation($input: ApplyJobInput!) {
    applyJob(input: $input) {
      cover_letter
      cv
      id
      job_id
      user_id
    }
  }
`;
