import { gql } from '@apollo/client';

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
        name
        email
        img_url
      }
    }
  }
`;

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
