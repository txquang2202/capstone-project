import { gql, TypedDocumentNode } from '@apollo/client';

import { type JobApplication } from '@/types/job';

export const GET_JOBS_APPLIED = gql`
  query CompanyJobApplications($companyId: ID!) {
    companyJobApplications(companyId: $companyId) {
      id
      cv
      cover_letter
      date_apply
      status
      job {
        name
      }
      user {
        firstName
        lastName
        email
        imgUrl
      }
    }
  }
`;

export const GET_JOB_APPLIED: TypedDocumentNode<{
  currentJobApplication: JobApplication;
}> = gql`
  query CurrentJobApplication {
    currentJobApplication {
      cover_letter
      cv
      date_apply
      id
    }
  }
`;

export const GET_EMPLOYEE_JOBS_APPLIED = gql`
  query JobApplications {
    jobApplications {
      id
      cv
      cover_letter
      date_apply
      status
      job {
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
  }
`;

export type JobApplicationResponse = DataResponse<
  'jobApplications',
  JobApplication[]
>;

export const UPDATE_JOB_STATUS = gql`
  mutation UpdateJobApplication(
    $input: updateJobApplication
    $updateJobApplicationId: ID!
  ) {
    updateJobApplication(input: $input, id: $updateJobApplicationId) {
      status
    }
  }
`;
