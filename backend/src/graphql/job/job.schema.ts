import { gql } from "apollo-server-express";

const JobApplicationSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type JobApplication {
    id: String!
    user_id: String!
    job_id: String!
    cv: String!
    cover_letter: String
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    jobApplications: [JobApplication!]
    jobApplication(id: String!): JobApplication
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input ApplyJobInput {
    user_id: String!
    job_id: String!
    cv: String! @constraint(minLength: 1)
    cover_letter: String
  }
  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------

  extend type Mutation {
    applyJob(input: ApplyJobInput!): JobApplication!
  }
`;

export default JobApplicationSchema;
