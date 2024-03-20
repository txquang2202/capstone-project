import { gql } from "apollo-server-express";
const UserSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type UserAttributes {
    companyId: [String]
    avatarUrl: [String]
    dob: [Date]
    location: [String]
    phone: [String]
    sex: [String]
  }

  type User {
    id: ID!
    username: String!
    email: String!
    firstName: String
    lastName: String
    imgUrl: String
    emailVerified: Boolean
    createdTimestamp: Date
    enabled: Boolean
    companyId: ID
    attributes: UserAttributes
  }

  type UserID {
    id: ID!
  }


  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    users: [User]
    user(id: ID!): User
    authUser: User
    helloWord: String
  }

  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input UserInput {
    lastName: String! @constraint(minLength: 3)
    firstName: String! @constraint(minLength: 3)
    email: String! @constraint(minLength: 6, format: "email")
    password: String! @constraint(minLength: 5)
  }
  input UpdateUserAttributes {
    companyId: [String]
    avatarUrl: [String]
    dob: Date
    location: String @constraint(minLength: 3)
    phone: String @constraint(minLength: 10)
    sex: String @constraint(minLength: 3)

  }
  input UpdateUserInput {
    lastName: String @constraint(minLength: 3)
    firstName: String @constraint(minLength: 3)
    email: String @constraint(minLength: 6, format: "email")
    attributes: UpdateUserAttributes
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    createUser(input: UserInput!): UserID
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): User
    hardDelUser(id: ID!): User
  }
`;

export default UserSchema;
