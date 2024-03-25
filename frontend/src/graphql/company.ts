import { gql } from '@apollo/client';

import { type Company } from '@/types/company';

export type GetCompanyResponse = DataResponse<'company', Company>;
export type GetCompanyVariable = { companyId: string };

export const GET_COMPANY = gql`
  query Company($companyId: ID!) {
    company(id: $companyId) {
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
      representative
      representative_position
      email
      phone
    }
  }
`;

// export const GET_COMPANIES = gql`
// query Companies() {
//   companies {
//     brief_overview
//     company_facebook
//     company_name
//     company_size
//     company_type
//     company_website
//     country
//     id
//     ot_policy
//     overview
//     working_day
//     representative
//     representative_position
//     email
//     phone
//   }
// }
// `;

// export const SEARCH_COMPANYS = gql`
//   query SearchJob($query: String!) {
//     searchJob(query: $query) {
//       company_id
//       company {
//         brief_overview
//         company_facebook
//         company_name
//         company_size
//         company_type
//         company_website
//         country
//         id
//         ot_policy
//         overview
//         working_day
//       }
//       country
//       date_posted
//       id
//       is_closed
//       job_description
//       salary_from
//       salary_to
//       name
//       skill_demand
//       skills
//       top_3_reason
//       why_you_love_working_here
//       working_type
//       was_applied
//       unit
//     }
//   }
// `;

// export type ApplyCompaCompanyResponse = DataResponse<'job',Company>;
// export type ApplyCompaCompanyVariable = {
//   input: {
//     cover_letter: string;
//     cv: string;
//     job_id: string;
//   };
// };

// export const APPLY_JOBS = gql`
//   mutation Mutation($input: ApplyJobInput!) {
//     applyJob(input: $input) {
//       cover_letter
//       cv
//       job_id
//       user_id
//     }
//   }
// `;

export type CreateCompaCompanyResponse = DataResponse<
  'createCompany',
  { id: string }
>;
export type CreateCompaCompanyVariable = {
  input: {
    company_name: string;
    company_website: string;
    country: string;
    representative: string;
    representative_position: string;
    email: string;
    phone: string;
  };
};

export const CREATE_COMPANY = gql`
  mutation Mutation($input: CompanyInput!) {
    createCompany(input: $input) {
      id
    }
  }
`;
