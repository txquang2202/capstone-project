import { gql } from "apollo-server-express";
const ShopSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type User {
    id: Int!
    name: String!
    email: String!
    bod: String
    phone: String
    gender: String
    current_address: String
    about_me: String
    cover_letter: String
    personal_link: String
    role: Int
    img_url: String
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    user(id: ID!): User
    users: [User]
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
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User
  }
`;

export default ShopSchema;
