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
    name: String! @constraint(minLength: 5)
    email: String! @constraint(minLength: 10, format: "email")
    bod: String @constraint(minLength: 10, format: "date")
    password: String! @constraint(minLength: 8)
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
