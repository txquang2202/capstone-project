import { gql } from "apollo-server-express";
const ShopSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
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
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    user(id: ID!): User
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
