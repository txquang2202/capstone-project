import { gql, TypedDocumentNode } from '@apollo/client';

import { type Job } from '@/types/job';

export const GET_SAVED_JOBS = gql`
  query SavedJobs {
    savedJobs {
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
      was_applied
    }
  }
`;

export const SAVE_JOB: TypedDocumentNode<
  {
    saveJob: boolean;
  },
  { id: string }
> = gql`
  mutation Mutation($id: ID!) {
    saveJob(id: $id)
  }
`;

export const UNSAVE_JOB: TypedDocumentNode<
  {
    unsaveJob: boolean;
  },
  { id: string }
> = gql`
  mutation Mutation($id: ID!) {
    unsaveJob(id: $id)
  }
`;

export type SavedJobResponse = DataResponse<'savedJobs', Job[]>;
