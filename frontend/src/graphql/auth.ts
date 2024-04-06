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

export const UPDATE_NAME_AUTH_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!, $updateUserId: ID!) {
    updateUser(input: $input, id: $updateUserId) {
      id
      firstName
    }
  }
`;

export const SOFT_DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      lastName
    }
  }
`;

export const ATRIBUTES_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      attributes {
        avatarUrl
        dob
        location
        phone
        sex
      }
      email
      firstName
    }
  }
`;

export const UPDATE_ATRIBUTES_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!, $updateUserId: ID!) {
    updateUser(input: $input, id: $updateUserId) {
      attributes {
        avatarUrl
        dob
        location
        phone
        sex
      }
    }
  }
`;

export const GET_ABOUTME_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      attributes {
        aboutMe
      }
    }
  }
`;

export const UPDATE_ABOUTME_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!, $updateUserId: ID!) {
    updateUser(input: $input, id: $updateUserId) {
      attributes {
        aboutMe
      }
    }
  }
`;

export const GET_EDUCATION_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      attributes {
        school
        major
        fromMonth
        fromYear
        toMonth
        toYear
        details
      }
    }
  }
`;

export const UPDATE_EDUCATION_USER = gql`
  mutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {
    updateUser(id: $updateUserId, input: $input) {
      attributes {
        fromYear
        fromMonth
        details
        major
        school
        toMonth
        toYear
      }
    }
  }
`;

export const GET_AWARD_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      attributes {
        awardDesc
        awardMonth
        awardName
        awardOrg
        awardYear
      }
    }
  }
`;

export const UPDATE_AWARD_USER = gql`
  mutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {
    updateUser(id: $updateUserId, input: $input) {
      attributes {
        awardDesc
        awardMonth
        awardName
        awardOrg
        awardYear
      }
    }
  }
`;

export const GET_COVERLETTER_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      attributes {
        coverLetter
      }
    }
  }
`;

export const UPDATE_COVERLETTER_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!, $updateUserId: ID!) {
    updateUser(input: $input, id: $updateUserId) {
      attributes {
        coverLetter
      }
    }
  }
`;

export const GET_JOBTYPES_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      attributes {
        companySize
        companyType
        jobLevel
        jobLocation
        workingType
      }
    }
  }
`;

export const UPDATE_JOBTYPES_USER = gql`
  mutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {
    updateUser(id: $updateUserId, input: $input) {
      attributes {
        workingType
        jobLocation
        jobLevel
        companySize
        companyType
      }
    }
  }
`;
