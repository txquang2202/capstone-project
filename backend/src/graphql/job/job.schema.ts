import { gql } from "apollo-server-express";

const JobSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------

  #job
  type JobWorkingLocation {
    id: ID!
    company_location: CompanyLocation
  }

  type CompanyLocation {
    address: String
  }

  type JobPayLoad {
    id: ID!
    name: String!
    salary_from: Int
    salary_to: Int
    unit: String
    hide_salary: Boolean
    country: String
    skills: String!
    working_type: String!
    top_3_reason: String!
    job_description: String
    skill_demand: String!
    why_you_love_working_here: String!
    date_posted: Date!
    company_id: ID!
    company: CompanyPayload
    date_apply: Date!
    is_closed: Boolean!
    job_working_location: [JobWorkingLocation!]
    was_applied: Boolean
  }
  #job_apply_description

  type JobApplication {
    id: ID!
    job_id: ID!
    user_id: ID!
    cv: String!
    cover_letter: String
    date_apply: Date!
    status: String!
    job: JobPayLoad
    user: User
  }
  #applying_job
  type JobApplying {
    id: ID!
    cv: String!
    cover_letter: String
    date_apply: Date!
    status: String!
    job_id: ID!
    user_id: ID!
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    jobApplications: [JobApplication!]
    jobApplication(id: ID!): JobApplication
    searchJob(query: String!, skip: Int, take: Int): [JobPayLoad]
    companyJobApplications(companyId: ID!): [JobApplication]
    job(id: ID!): JobPayLoad

    jobs: [JobPayLoad!]
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input ApplyJobInput {
    job_id: ID!
    cv: String! @constraint(minLength: 1)
    cover_letter: String
  }
  input JobInput {
    name: String!
    salary_from: Int
    salary_to: Int
    unit: String
    hide_salary: Boolean
    country: String!
    skills: String!
    working_type: String!
    top_3_reason: String!
    job_description: String!
    skill_demand: String!
    why_you_love_working_here: String!
    company_id: ID!
    is_closed: Boolean!
  }
  input updateJobInput {
    name: String!
    salary_from: Int
    salary_to: Int
    unit: String
    hide_salary: Boolean
    country: String!
    skills: String!
    working_type: String!
    top_3_reason: String!
    job_description: String!
    skill_demand: String!
    why_you_love_working_here: String!
    is_closed: Boolean!
  }
  input updateJobApplication {
    # cv: String!
    # cover_letter: String
    status: String!
  }
  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------

  extend type Mutation {
    applyJob(input: ApplyJobInput!): JobApplying!
    updateJobApplication(id: ID!, input: updateJobApplication): JobApplication!
    createJob(input: JobInput): JobPayLoad!
    updateJob(id: ID!, input: updateJobInput): JobPayLoad!
    deleteJob(id: ID!): JobPayLoad!
    sendAllJobsToEls: [JobPayLoad]
  }
`;

export default JobSchema;
