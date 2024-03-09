import { gql } from "apollo-server-express";

const JobApplicationSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type JobApplication {
    id: Int!
    user_id: Int!
    job_id: Int!
    cv: String!
    cover_letter: String
  }
  type Job {
    job_id: Int
    company_id: Int
    working_location: Int
    name: String
    salary: Int
    country: String
    skills: String
    working_type: String
    overview: String
    top_3_reason: String
    job_description: String
    skill_demand: String
    why_you_love_working_here: String
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    jobApplicaitons: [JobApplication!]
    jobApplication(id: ID!): JobApplication
    search(query: String!): [Job]
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input ApplyJobInput {
    user_id: Int!
    job_id: Int!
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
