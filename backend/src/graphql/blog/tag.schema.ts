import { gql } from "apollo-server-express";
const TagSchema = gql`
    # ---------------------------------------------------------
    # Model Objects
    # ---------------------------------------------------------
    type Tag{
        id: ID!
        tag_name: String!
    }
    # ---------------------------------------------------------
    # Queries
    # ---------------------------------------------------------
    extend type Query {
        tags: [Tag!]
    }
    # ---------------------------------------------------------
    # Input Objects
    # ---------------------------------------------------------
    input TagInput {
        tag_name: String!
    }
    # ---------------------------------------------------------
    # Mutations
    # --------------------------------------------------------
    extend type Mutation {
        createTag(input: TagInput!): Tag
        updateTag(id: ID!, input: TagInput!): Tag
        deleteTag(id: ID!): Tag
    }
`;
export default TagSchema;