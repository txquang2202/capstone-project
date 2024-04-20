import { gql } from "apollo-server-express";
const CompanySchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type CompanyLocate {
    id: ID
    company_id: ID
    address: String
    long: Float
    lat: Float
  }
  type CompanyPayload {
    id: ID!
    company_name: String!
    company_type: String
    country: String
    working_day: String
    ot_policy: String
    company_size: String
    overview: String
    company_website: String
    company_facebook: String
    brief_overview: String
    representative: String
    representative_position: String
    email: String
    phone: String
    company_location: [CompanyLocate]
    enable: Boolean
  }
  # type JobPayLoad{

  # }
  type jobCompanyPayload {
    jobs: [String]
  }

  type CompanySpotlightPayload {
    id: ID!
    company_name: String!
    company_type: String
    country: String
    working_day: String
    ot_policy: String
    company_size: String
    overview: String
    company_website: String
    company_facebook: String
    brief_overview: String
    representative: String
    representative_position: String
    email: String
    phone: String
    company_location: [CompanyLocate]
    enable: Boolean
    job: [JobPayLoad]
  }

  type CompanyReview {
    id: ID!
    company_id: String!
    user_id: String!
    summary: String!
    ot_satisfy_reason: String
    input_experience: String
    input_improvement_suggestion: String
    is_recommended: Boolean
    ot_satisfy: Boolean
  }
  type CompanyRequest {
    id: ID!
    representative_name: String!
    representative_position: String!
    representative_email: String!
    representative_phone: String!
    company_name: String!
    company_location: String!
    company_weburl: String
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    jobCompany(id: ID!): [JobPayLoad]
    companies: [CompanyPayload!]
    company(id: ID!): CompanyPayload
    companySpotlight: CompanySpotlightPayload
    companyReviews: [CompanyReview!]
    companyReview(id: ID!): CompanyReview
    searchCompany(query: String!, skip: Int, take: Int): [CompanyPayload]
    companyRequests: [CompanyRequest!]
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------

  input CompanyInput {
    company_name: String!
    company_type: String
    country: String!
    working_day: String
    ot_policy: String
    company_size: String
    overview: String @constraint(minLength: 10, maxLength: 80)
    company_website: String
    company_facebook: String
    brief_overview: String @constraint(minLength: 1, maxLength: 80)
    representative: String
    representative_position: String
    email: String @constraint(format: "email")
    phone: String
    address: String
  }
  input UpdateCompanyInput {
    company_name: String
    company_type: String
    country: String
    working_day: String
    ot_policy: String
    company_size: String
    overview: String
    company_website: String
    company_facebook: String
    brief_overview: String
    representative: String
    representative_position: String
    email: String @constraint(format: "email")
    phone: String
    enable: Boolean
  }

  input CompanyReviewInput {
    company_id: ID!
    user_id: String!
    summary: String! @constraint(minLength: 10, maxLength: 80)
    ot_satisfy_reason: String @constraint(minLength: 50, maxLength: 140)
    input_experience: String @constraint(minLength: 50, maxLength: 10000)
    input_improvement_suggestion: String
      @constraint(minLength: 50, maxLength: 10000)
    is_recommended: Boolean!
    ot_satisfy: Boolean!
  }
  input UpdateCompanyReviewInput {
    summary: String @constraint(minLength: 10, maxLength: 80)
    ot_satisfy_reason: String @constraint(minLength: 50, maxLength: 140)
    input_experience: String @constraint(minLength: 50, maxLength: 10000)
    input_improvement_suggestion: String
      @constraint(minLength: 50, maxLength: 10000)
    is_recommended: Boolean
    ot_satisfy: Boolean
  }
  input CompanyRequestInput {
    representative_name: String!
    representative_position: String!
    representative_email: String!
    representative_phone: String!
    company_name: String!
    company_location: String!
    company_weburl: String
  }
  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------

  extend type Mutation {
    createCompany(input: CompanyInput!): CompanyPayload!
    updateCompany(id: ID!, input: UpdateCompanyInput!): CompanyPayload
    deleteCompany(id: ID!): CompanyPayload
    createCompanyReview(input: CompanyReviewInput!): CompanyReview!
    updateCompanyReview(
      id: ID!
      input: UpdateCompanyReviewInput!
    ): CompanyReview!
    deleteCompanyReview(id: ID!): CompanyReview!
    createCompanyRequest(input: CompanyRequestInput!): CompanyRequest!
    deleteCompanyRequest(id: ID!): CompanyRequest!
  }
`;

export default CompanySchema;
