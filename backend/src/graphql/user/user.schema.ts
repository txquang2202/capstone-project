import { gql } from "apollo-server-express";
const ShopSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type UserPayload {
    id: ID!
    name: String!
    email: String!
    password: String!
    bod: Date
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    user(id: ID!): UserPayload
    users: [UserPayload]
    helloWord: String
  }

  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input UserInput {
    name: String!
    email: String!
    bod: Date
    password: String!
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------

  extend type Mutation {
    createUser(input: UserInput!): UserPayload
    updateUser(id: ID!, input: UserInput!): UserPayload
    deleteUser(id: ID!): UserPayload
  }
`;

export default ShopSchema;
