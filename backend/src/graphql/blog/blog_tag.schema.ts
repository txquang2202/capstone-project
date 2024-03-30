import { gql } from "apollo-server-express";
const BlogTagSchema = gql`
    # ---------------------------------------------------------
    # Model Objects
    # ---------------------------------------------------------
    type BlogTag{
        blog_id: ID!
        tag_id: ID!
    }
    
    
    # ---------------------------------------------------------
    # Queries
    # ---------------------------------------------------------
    extend type Query {
        blogTags: [BlogTag!]
    }
    # ---------------------------------------------------------
    # Input Objects
    # ---------------------------------------------------------
    input BlogTagInput {
        blog_id: ID!
        tag_id: ID!

    }
    
    # ---------------------------------------------------------
    # Mutations
    # --------------------------------------------------------
    extend type Mutation {
        createBlogTag(input: BlogTagInput!): BlogTag

    }
`;
export default BlogTagSchema;