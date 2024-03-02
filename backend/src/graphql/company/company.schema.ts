import { gql } from "apollo-server-express";
const CompanySchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type CompanyPayload {
    id: ID!
    name: String!
    type: String
    country: String
    working_day: String
    ot_policy: String
    size: Int
    overview: String
  }

  type CompanyReview {
    id: ID!
    company_id: Int!
    user_id: Int!
    over_rating: Float!
    summary: String!
    ot_satisfy: Float!
    ot_satisfy_reason: String
    input_experience: String
    input_improvement_suggestion: String
    is_recommned: Boolean
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    companies: [CompanyPayload!]
    company(id: ID!): CompanyPayload
    companyReviews: [CompanyReview!]
    companyReview(id: ID!): CompanyReview
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------

  input CompanyInput {
    name: String!
    type: String
    country: String
    working_day: String
    ot_policy: String
    size: Int
    overview: String
  }

  input CompanyReviewInput {
    company_id: Int!
    user_id: Int!
    over_rating: Float!
    summary: String!
    ot_satisfy: Float!
    ot_satisfy_reason: String
    input_experience: String
    input_improvement_suggestion: String
    is_recommned: Boolean
  }
  input UpdateCompanyReviewInput {
    over_rating: Float!
    summary: String!
    ot_satisfy: Float!
    ot_satisfy_reason: String
    input_experience: String
    input_improvement_suggestion: String
    is_recommned: Boolean
  }
  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------

  extend type Mutation {
    createCompany(input: CompanyInput!): CompanyPayload
    updateCompany(id: ID!, input: CompanyInput!): CompanyPayload
    deleteCompany(id: ID!): CompanyPayload
    createCompanyReview(input: CompanyReviewInput!): CompanyReview!
    updateCompanyReview(
      id: ID!
      input: UpdateCompanyReviewInput!
    ): CompanyReview!
    deleteCompanyReview(id: ID!): CompanyReview!
  }
`;

export default CompanySchema;
