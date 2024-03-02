import { gql } from "apollo-server-express";
import UserSchema from "./user/user.schema";
import JobApplicationSchema from "./job/job.schema";
import CompanySchema from "./company/company.schema";

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
  ${JobApplicationSchema}
  ${CompanySchema}
`;

export default schema;
