import { rule } from "graphql-shield";
import { ApolloError } from "apollo-server-express";
import { RESPONSE_CODE } from "../constants/response";
import { ContextInterface } from "./context";
const ROLES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
  EMPLOYER: "employer",
  EDITOR: "editor",
};
const isAuthenticated = rule()(
  async (_, args, { authUser, isRoot }: ContextInterface) => {
    if (!isRoot && !authUser) {
      return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
    }
    return true;
  },
);
const isAdminOnly = rule()(
  async (_, args, { authUser, isRoot }: ContextInterface) => {
    if (!isRoot && !authUser) {
      return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
    }
    if (!isRoot && authUser.realm_access.roles.indexOf(ROLES.ADMIN) === -1) {
      return new ApolloError(RESPONSE_CODE.FORBIDDEN);
    }
    return true;
  },
);

const isEmployerOnly = rule()(
  async (_, args, { authUser, isRoot }: ContextInterface) => {
    if (!isRoot && !authUser) {
      return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
    }
    if (!isRoot && authUser.realm_access.roles.indexOf(ROLES.EMPLOYER) === -1) {
      return new ApolloError(RESPONSE_CODE.FORBIDDEN);
    }
    return true;
  },
);

const isEmployeeOnly = rule()(
  async (_, args, { authUser, isRoot }: ContextInterface) => {
    if (!isRoot && !authUser) {
      return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
    }
    if (!isRoot && authUser.realm_access.roles.indexOf(ROLES.EMPLOYEE) === -1) {
      return new ApolloError(RESPONSE_CODE.FORBIDDEN);
    }
    return true;
  },
);

const isEditorOnly = rule()(
  async (_, args, { authUser, isRoot }: ContextInterface) => {
    if (!isRoot && !authUser) {
      return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
    }
    if (!isRoot && authUser.realm_access.roles.indexOf(ROLES.EDITOR) === -1) {
      return new ApolloError(RESPONSE_CODE.FORBIDDEN);
    }
    return true;
  },
);

const isAdminAndUser = rule()(
  async (_, args, { authUser, isRoot }: ContextInterface) => {
    if (!isRoot && !authUser) {
      return new ApolloError(RESPONSE_CODE.UNAUTHORIZED);
    }
    if (
      !isRoot &&
      authUser.realm_access.roles.indexOf(ROLES.ADMIN) === -1 &&
      authUser.realm_access.roles.indexOf(ROLES.EMPLOYEE) === -1 &&
      authUser.realm_access.roles.indexOf(ROLES.EMPLOYER) === -1 &&
      authUser.realm_access.roles.indexOf(ROLES.EDITOR) === -1
    ) {
      return new ApolloError(RESPONSE_CODE.FORBIDDEN);
    }
    return true;
  },
);

const isPublic = rule()(async (_) => {
  return true;
});
export {
  isAuthenticated,
  isAdminOnly,
  isPublic,
  isEmployerOnly,
  isEmployeeOnly,
  isEditorOnly,
  isAdminAndUser,
};
