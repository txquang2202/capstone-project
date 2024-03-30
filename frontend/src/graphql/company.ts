import { gql } from '@apollo/client';

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
