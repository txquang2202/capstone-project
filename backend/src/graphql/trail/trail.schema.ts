import { gql } from "apollo-server-express";

const TrailSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------

  type Trail {
    id: ID!
    actor: ID
    actorData: User
    event: String
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    trails: [Trail]
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  input CreateTrailInput {
    actor: ID!
    event: String!
    target_id: ID
    target_type: String
  }

  extend type Mutation {
    createTrail(input: CreateTrailInput): Boolean
  }
`;

export default TrailSchema;
