import { gql } from "apollo-server-express";

const UploadSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type UploadedFileResponse {
    fileName: String!
    mimeTye: String!
    encoding: String!
    url: String!
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    singleUpload(file: Upload!): UploadedFileResponse!
  }
`;

export default UploadSchema;
