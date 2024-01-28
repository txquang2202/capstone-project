import { rule } from "graphql-shield";
import { ApolloError } from "apollo-server-express";
import { RESPONSE_CODE } from "../constants/response";
const isAuthenticated = rule()(async (_, args, { authUser, isRoot }) => {
  if (!isRoot && (!authUser || !authUser.usn || !authUser.cki)) {
    return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
  }
  return true;
});
const isAdminOnly = rule()(async (_, args, { authUser, isRoot }) => {
  if (!isRoot && (!authUser || !authUser.usn || !authUser.cki)) {
    return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
  }
  if (!isRoot && authUser.role !== "admin") {
    return new ApolloError(RESPONSE_CODE.FORBIDDEN);
  }
  return true;
});
const isAdminAndUser = rule()(async (_, args, { authUser, isRoot }) => {
  if (!isRoot && (!authUser || !authUser.usn || !authUser.cki)) {
    return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
  }
  if (!isRoot && authUser.role !== "admin" && authUser.role !== "user") {
    return new ApolloError(RESPONSE_CODE.FORBIDDEN);
  }
  return true;
});
const isPublic = rule()(async (_) => {
  return true;
});
export { isAuthenticated, isAdminOnly, isAdminAndUser, isPublic };
