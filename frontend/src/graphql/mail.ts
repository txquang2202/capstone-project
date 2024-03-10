import { gql } from '@apollo/client';

export type SendEmailVariable = {
  email: string;
  subject: string;
  content: string;
};

export const SEND_EMAIL = gql`
  mutation Mutation($email: String!, $subject: String!, $content: String!) {
    sendEmail(email: $email, subject: $subject, content: $content) {
      message
      sendTo
      sentDate
    }
  }
`;
