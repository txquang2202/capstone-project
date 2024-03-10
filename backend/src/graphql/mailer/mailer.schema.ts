import { gql } from "apollo-server-express";

const MailerSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type MailerResponse {
    sendTo: String!
    message: String!
    sentDate: Date!
  }

  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------

  extend type Mutation {
    sendEmail(
      email: String!
      subject: String!
      content: String!
    ): MailerResponse!
  }
`;

export default MailerSchema;
