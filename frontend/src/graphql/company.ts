import { gql } from '@apollo/client';

import { type Company } from '@/types/company';

export type CreateCompanyRequestResponse = DataResponse<
  'createCompanyRequest',
  { id: string }
>;
export type CreateCompanyRequestVariable = {
  input: {
    representative_name: string;
    representative_position: string;
    representative_email: string;
    representative_phone: string;
    company_name: string;
    company_location: string;
    company_weburl: string;
  };
};

export const CREATE_COMPANY_REQUEST = gql`
  mutation CreateCompanyRequest($input: CompanyRequestInput!) {
    createCompanyRequest(input: $input) {
      id
    }
  }
`;

export type GetCompanyResponse = DataResponse<'company', Company>;
export type GetCompanyVariable = { companyId: string };

export const GET_COMPANIES = gql`
  query Companies {
    companies {
      id
      company_name
      company_type
      country
      working_day
      ot_policy
      company_size
      overview
      company_website
      company_facebook
      brief_overview
      company_location {
        id
        company_id
        address
        long
        lat
      }
      enable
    }
  }
`;
export const GET_COMPANY = gql`
  query Company($companyId: ID!) {
    company(id: $companyId) {
      id
      company_name
      company_type
      country
      working_day
      ot_policy
      company_size
      overview
      company_website
      company_facebook
      brief_overview
      company_location {
        id
        company_id
        address
        long
        lat
      }
    }
  }
`;
export const UPDATE_COMPANY = gql`
  mutation UpdateCompany($updateCompanyId: ID!, $input: UpdateCompanyInput!) {
    updateCompany(id: $updateCompanyId, input: $input) {
      id
      company_name
      company_type
      country
      working_day
      ot_policy
      company_size
      overview
      company_website
      company_facebook
      brief_overview
      enable
    }
  }
`;
export const DELETE_COMPANY = gql`
  mutation DeleteCompany($deleteCompanyId: ID!) {
    deleteCompany(id: $deleteCompanyId) {
      id
      company_name
    }
  }
`;

export const GET_NAME_COMPANIES = gql`
  query Companies {
    companies {
      company_name
      id
    }
  }
`;
