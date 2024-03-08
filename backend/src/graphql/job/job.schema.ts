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
  type Job {
    id: String
    company_id: String
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
