import { gql } from "apollo-server-express";
import UserSchema from "./user/user.schema";

const schema = gql`
  # Date
  scalar Date

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }

  ${UserSchema}
`;

export default schema;
