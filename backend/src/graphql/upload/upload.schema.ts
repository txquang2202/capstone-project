import { gql } from "apollo-server-express";

const UploadSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  scalar Upload

  type UploadedFileResponse {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
    size: Int!
    lastModified: Date!
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    file(key: String!): UploadedFileResponse
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    singleUpload(prefix: String!, file: Upload!): UploadedFileResponse!
  }
`;

export default UploadSchema;
