import { gql } from "apollo-server-express";
const BlogSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Blog {
    id: ID!
    user_id: ID!
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
    blog(slug: String!): Blog
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input BlogInput {
    user_id: ID!
    content: String! @constraint(minLength: 1)
    title: String! @constraint(minLength: 5, maxLength: 255)
  }

  # ---------------------------------------------------------
  # Mutations
  # --------------------------------------------------------
  extend type Mutation {
    createBlog(input: BlogInput!): Blog
    updateBlog(id: ID!, input: BlogInput!): Blog
    deleteBlog(id: ID!): Blog
  }
`;

export default BlogSchema;
