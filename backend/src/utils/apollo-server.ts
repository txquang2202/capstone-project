import keycloakApiClient from "../services/keycloak";
import { ApolloServerPluginInlineTraceDisabled } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
} from "graphql-constraint-directive";
import depthLimit from "graphql-depth-limit";
import { applyMiddleware } from "graphql-middleware";
import { rateLimitDirective } from "graphql-rate-limit-directive";
import jwt from "jsonwebtoken";
import elastic from "./elasticsearch";
import { AuthUser } from "src/graphql/context";
import { executor } from "./executor";
import Logger from "./logger";
import prisma from "./prisma";
import ProducerFactory from "./kafka";
import mailerService from "../services/mailer";
require("dotenv").config();
const { makeExecutableSchema } = require("@graphql-tools/schema");

const { rateLimitDirectiveTypeDefs, rateLimitDirectiveTransformer } =
  rateLimitDirective();

const checkAuthorization = async (token: string) => {
  try {
    // const authUser = await jwt.verify(token, process.env.KEY_CONSOLE || "");
    // return authUser;
    const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.KEYCLOAK_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;

    const decodedToken = jwt.verify(token, public_key, {
      algorithms: ["RS256"],
    });

    return decodedToken;
  } catch (error) {
    return false;
  }
};
const initKafkaProducer = async () => {
  const kafkaProducer = new ProducerFactory();
  try {
    // await kafkaProducer.start();
    // await kafkaProducer.healthCheck();
    // await kafkaProducer.shutdown();
    return kafkaProducer;
  } catch (error) {
    console.error("Failed to initialize Kafka producer:", error);
    return null; // Return null or any default value to indicate failure
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

      let authUser: AuthUser | null = null;
      if (!isRoot && req.headers.authorization != null) {
        const user: any = await checkAuthorization(
          req.headers.authorization || "",
        );

        console.log("User: ", user);

        if (user.sid) {
          authUser = user;
        }
      }
      const keycloak = keycloakApiClient;
      const kafkaProducer = await initKafkaProducer();

      return Object.assign({
        isRoot,
        authUser,
        prisma,
        keycloak,
        elastic,
        kafkaProducer,
        mailer: mailerService,
      });
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
