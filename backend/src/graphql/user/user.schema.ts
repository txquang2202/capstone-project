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
    aboutMe: [String]
    school: [String]
    major: [String]
    fromMonth: [String]
    fromYear: [String]
    toMonth: [String]
    toYear: [String]
    details: [String]
    awardName: [String]
    awardOrg: [String]
    awardMonth: [String]
    awardYear: [String]
    awardDesc: [String]
    coverLetter: [String]
    jobLevel: [String]
    workingType: [String]
    companyType: [String]
    companySize: [String]
    jobLocation: [String]
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
    location: String
    phone: String
    sex: String
    aboutMe: String
    school: String
    major: String
    fromMonth: String
    fromYear: String
    toMonth: String
    toYear: String
    details: String
    awardName: String
    awardOrg: String
    awardMonth: String
    awardYear: String
    awardDesc: String
    coverLetter: String
    jobLevel: [String]
    workingType: [String]
    companyType: [String]
    companySize: [String]
    jobLocation: String
  }
  input UpdateUserInput {
    lastName: String
    firstName: String
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
