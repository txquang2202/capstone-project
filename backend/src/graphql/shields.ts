import { ApolloError } from "apollo-server-express";
import assign from "assign-deep";
import { shield } from "graphql-shield";
import { RESPONSE_CODE } from "../constants/response";
import { isPublic } from "./rules";

const permissions = [
  {
    Query: {
      user: isPublic,
    },
    Mutation: {
      // createUser: isAdminOnly,
      // updateUser: isAdminAndUser,
      // deleteUser: isAdminOnly,
    },
  },
];
const shieldPermission = shield(assign(...permissions), {
  fallbackError: (thrownThing) => {
    // , parent, args, context, info
    if (thrownThing instanceof ApolloError) {
      return thrownThing;
    } else if (thrownThing instanceof Error) {
      return new ApolloError(thrownThing.message, "ERR_INTERNAL_SERVER");
      // return thrownThing;
    }
    return new ApolloError(RESPONSE_CODE.FORBIDDEN, RESPONSE_CODE.FORBIDDEN);
  },
  debug: true,
});
export default shieldPermission;
