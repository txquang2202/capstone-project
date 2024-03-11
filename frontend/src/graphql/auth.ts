import { gql } from '@apollo/client';

export const AUTH_USER = gql`
  query {
    authUser {
      id
      username
      email
      firstName
      lastName
      imgUrl
      emailVerified
      enabled
      companyId
    }
  }
`;
