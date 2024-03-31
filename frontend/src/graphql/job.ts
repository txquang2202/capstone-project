import { gql, TypedDocumentNode } from '@apollo/client';

import { type Job } from '@/types/job';

export type GetJobResponse = DataResponse<'job', Job>;
export type GetJobVariable = { jobId: string };
export type GetJobCompanyVariable = { jobCompanyId: string };

export const GET_JOB = gql`
  query Job($jobId: ID!) {
    job(id: $jobId) {
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
      hide_salary
      unit
      name
      skill_demand
      skills
      top_3_reason
      why_you_love_working_here
      working_type
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
      hide_salary
      unit
      name
      skill_demand
      skills
      top_3_reason
      why_you_love_working_here
      working_type
    }
  }
`;

export const GET_JOB_COMPANY = gql`
  query Job($jobCompanyId: ID!) {
    jobCompany(id: $jobCompanyId) {
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
      hide_salary
      unit
      name
      skill_demand
      skills
      top_3_reason
      why_you_love_working_here
      working_type
    }
  }
`;

export const SEARCH_JOBS: TypedDocumentNode<
  {
    searchJob: {
      total: number;
      jobs: Job[];
    };
  },
  {
    query: string;
    skip?: number;
    take?: number;
    address?: string;
    unit?: string;
    salaryFrom?: number;
    salaryTo?: number;
    companyType?: string[];
    workingType?: string[];
  }
> = gql`
  query SearchJob(
    $query: String!
    $skip: Int
    $take: Int
    $address: String
    $unit: String
    $salaryFrom: Int
    $salaryTo: Int
    $companyType: [String]
    $workingType: [String]
  ) {
    searchJob(
      query: $query
      skip: $skip
      take: $take
      address: $address
      unit: $unit
      salaryFrom: $salaryFrom
      salaryTo: $salaryTo
      companyType: $companyType
      workingType: $workingType
    ) {
      total
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
        was_applied
        saved
        is_hot
        unit
        job_working_location {
          company_location {
            address
          }
        }
        applied {
          id
          date_apply
        }
      }
    }
  }
`;



export type ApplyJobResponse = DataResponse<'job', Job>;
export type ApplyJobVariable = {
  input: {
    cover_letter: string;
    cv: string;
    job_id: string;
  };
};

export const APPLY_JOBS = gql`
  mutation Mutation($input: ApplyJobInput!) {
    applyJob(input: $input) {
      cover_letter
      cv
      job_id
      user_id
    }
  }
`;

export type CreateJobResponse = DataResponse<'createJob', { id: string }>;
export type CreateJobVariable = {
  input: {
    company_id: string;
    country: string;
    hide_salary: boolean;
    is_closed: boolean;
    job_description: string;
    name: string;
    salary_from: number;
    salary_to: number;
    skill_demand: string;
    skills: string;
    top_3_reason: string;
    unit: string;
    why_you_love_working_here: string;
    working_type: string;
  };
};

export const CREATE_JOB = gql`
  mutation Mutation($input: JobInput) {
    createJob(input: $input) {
      id
    }
  }
`;

export type UpdateJobResponse = DataResponse<'updateJob', { id: string }>;
export type UpdateJobVariable = {
  updateJobId: string;
  updateJobInput2: {
    country: string;
    hide_salary: boolean;
    is_closed: boolean;
    job_description: string;
    name: string;
    salary_from: number;
    salary_to: number;
    skill_demand: string;
    skills: string;
    top_3_reason: string;
    unit: string;
    why_you_love_working_here: string;
    working_type: string;
  };
};

export const UPDATE_JOB = gql`
  mutation UpdateJob($updateJobId: ID!, $updateJobInput2: updateJobInput) {
    updateJob(id: $updateJobId, input: $updateJobInput2) {
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
      hide_salary
      unit
      name
      skill_demand
      skills
      top_3_reason
      why_you_love_working_here
      working_type
    }
  }
`;

export type DeleteJobResponse = DataResponse<'deleteJob', { id: string }>;
export type DeleteJobVariable = { deleteJobId: string };
export const DELETE_JOB = gql`
  mutation Mutation($deleteJobId: ID!) {
    deleteJob(id: $deleteJobId) {
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
      hide_salary
      unit
      name
      skill_demand
      skills
      top_3_reason
      why_you_love_working_here
      working_type
    }
  }
`;
