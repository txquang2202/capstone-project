import { gql } from "apollo-server-express";

const JobApplicationSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type JobApplication {
    user_id: Int!
    job_id: Int!
    cv: Int!
    cover_letter: String
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    jobApplicaitons: [JobApplication!]
    jobApplication(id: ID!): JobApplication
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input ApplyJobInput {
    user_id: Int!
    job_id: Int!
    cv: Int!
    cover_letter: String!
  }
  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------

  extend type Mutation {
    applyJob(input: ApplyJobInput!): JobApplication!
  }
`;

export default JobApplicationSchema;
