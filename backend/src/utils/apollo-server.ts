import { ApolloServerPluginInlineTraceDisabled } from "apollo-server-core";
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
} from "graphql-constraint-directive";
import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import { applyMiddleware } from "graphql-middleware";
import { rateLimitDirective } from "graphql-rate-limit-directive";
import jwt from "jsonwebtoken";
import prisma from "./prisma";
import elastic from "./elasticsearch";
import kafka from "./kafka";
import { executor } from "./executor";
import Logger from "./logger";
require("dotenv").config();
const { makeExecutableSchema } = require("@graphql-tools/schema");

const { rateLimitDirectiveTypeDefs, rateLimitDirectiveTransformer } =
  rateLimitDirective();

const checkAuthorization = async (token: string) => {
  try {
    const authUser = await jwt.verify(token, process.env.KEY_CONSOLE || "");
    return authUser;
  } catch (error) {
    return false;
  }
};

export const createApolloServer = (
  schema: any,
  resolvers: any,
  permissions: any,
  // whitelist: string[],
  // corsEnabled: boolean,
): any => {
  schema = rateLimitDirectiveTransformer(
    makeExecutableSchema({
      typeDefs: [
        rateLimitDirectiveTypeDefs,
        constraintDirectiveTypeDefs,
        schema,
      ],
      resolvers,
    }),
  );
  schema = constraintDirective()(schema);
  schema = applyMiddleware(schema, permissions);
  const introspection = process.env.APOLLO_INTROSPECTION === "true";
  const debug = process.env.APOLLO_DEBUG === "true";
  return new ApolloServer({
    schema,
    introspection,
    debug,
    plugins: [ApolloServerPluginInlineTraceDisabled()],
    executor: executor(schema),
    context: async ({ req, connection }: any) => {
      if (connection) {
        return connection.context;
      }
      // return models;
      const isRoot =
        req.headers.authorization === process.env.KEY_AUTHORIZATION;
      let authUser;
      if (!isRoot && req.headers.authorization != null) {
        const user: any = await checkAuthorization(
          req.headers.authorization || "",
        );

        if (user.usn) {
          authUser = user;
          authUser.role = "admin";
        }
      }
      return Object.assign({ isRoot, authUser, prisma, elastic, kafka });
    },
    validationRules: [depthLimit(20)],
    formatError: (error) => {
      new Logger().error("[GraphQL.error]", error);
      return {
        message: error.message,
        code: (error.extensions && error.extensions.code) || null,
      };
    },
  });
};
