import { gql, TypedDocumentNode } from '@apollo/client';

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
