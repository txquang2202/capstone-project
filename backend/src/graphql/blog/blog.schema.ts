import { gql } from "apollo-server-express";
const BlogSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Blog {
    id: Int!
    user_id: Int!
    content: String!
    title: String!
    time_read: Int
    created_at: Date
    user: User
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    blogs(skip: Int, take: Int): [Blog]
    blog(id: Int!): Blog
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------

  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------
`;

export default BlogSchema;
