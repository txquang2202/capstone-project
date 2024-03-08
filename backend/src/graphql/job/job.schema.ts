import { gql } from "apollo-server-express";

const JobSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type JobPayLoad {
    id: ID!
    name: String!
    salary: Int
    country: String
    skills: String!
    working_type: String!
    top_3_reason: String!
    job_description: String
    skill_demand: String!
    why_you_love_working_here: String!
    date_posted: Date!
    company_id: ID!
    is_closed: Boolean!
  }
  type JobApplication {
    id: ID!
    user_id: ID!
    job_id: ID!
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
    jobApplication(id: ID!): JobApplication
    job(id: ID!): JobPayLoad
    jobs: [JobPayLoad!]
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input ApplyJobInput {
    user_id: ID!
    job_id: ID!
    cv: String! @constraint(minLength: 1)
    cover_letter: String
  }
  input JobInput {
    name: String!
    salary: Int!
    country: String!
    skills: String!
    working_type: String!
    top_3_reason: String!
    job_description: String!
    skill_demand: String!
    why_you_love_working_here: String!
    # date_posted: Date!
    company_id: ID!
    is_closed: Boolean!
  }
  input updateJobInput {
    name: String!
    salary: Int!
    country: String!
    skills: String!
    working_type: String!
    top_3_reason: String!
    job_description: String!
    skill_demand: String!
    why_you_love_working_here: String!
    is_closed: Boolean!
  }
  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------

  extend type Mutation {
    applyJob(input: ApplyJobInput!): JobApplication!
    createJob(input: JobInput): JobPayLoad!
    updateJob(id: ID!, input: updateJobInput): JobPayLoad!
    deleteJob(id: ID!): JobPayLoad!
  }
`;

export default JobSchema;
