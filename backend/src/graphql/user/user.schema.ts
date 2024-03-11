import { gql } from "apollo-server-express";
const ShopSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type UserAttributes {
    companyId: [String]
    avatarUrl: [String]
  }

  type User {
    id: ID!
    username: String!
    email: String!
    firstName: String
    lastName: String
    imgUrl: String
    emailVerified: Boolean
    createdTimestamp: Int
    enabled: Boolean
    companyId: ID
    attributes: UserAttributes
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    user(id: ID!): User
    authUser: User
    helloWord: String
  }

  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  # input UserInput {
  #   name: String! @constraint(minLength: 5)
  #   email: String! @constraint(minLength: 10, format: "email")
  #   bod: String @constraint(minLength: 10, format: "date")
  #   password: String! @constraint(minLength: 8)
  # }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------

  # extend type Mutation {
  # createUser(input: UserInput!): User
  # updateUser(id: ID!, input: UserInput!): User
  # deleteUser(id: ID!): User
  # }
`;

export default ShopSchema;
