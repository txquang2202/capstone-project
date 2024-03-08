import { gql } from "apollo-server-express";
import UserSchema from "./user/user.schema";
import JobSchema from "./job/job.schema";
import CompanySchema from "./company/company.schema";
import BlogSchema from "./blog/blog.schema";

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
  ${JobSchema}
  ${CompanySchema}
  ${BlogSchema}
`;

export default schema;
