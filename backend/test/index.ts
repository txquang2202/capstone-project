import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import { rateLimitDirective } from "graphql-rate-limit-directive";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "../src/graphql/resolvers";
import schemaDefs from "../src/graphql/schema";
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
} from "graphql-constraint-directive";
const { rateLimitDirectiveTypeDefs } = rateLimitDirective();

dotenv.config({ path: ".env.test" });

type cleanUpHookFunction = () => Promise<void>;

let cleanUpHook: cleanUpHookFunction = async () => {
  // none
};

const appendCleanUpHook = (func: cleanUpHookFunction) => {
  const currentCleanUpHook = cleanUpHook;
  cleanUpHook = async () => {
    await currentCleanUpHook();
    await func();
  };
};

const getPrismaClient = (): PrismaClient => {
  const client = new PrismaClient();
  appendCleanUpHook(async () => {
    await client.$disconnect();
  });
  return client;
};

export const schema = constraintDirective()(
  makeExecutableSchema({
    typeDefs: [
      rateLimitDirectiveTypeDefs,
      constraintDirectiveTypeDefs,
      schemaDefs,
    ],
    resolvers,
  }),
);

let context: any = null;

export const getContext = async (): Promise<any> => {
  if (context !== null) {
    return context;
  }

  context = {
    prisma: getPrismaClient(),
  };

  appendCleanUpHook(async () => {
    context = null;
  });

  return context;
};

export const cleanUp = async (): Promise<void> => {
  await cleanUpHook();
  cleanUpHook = async () => {
    // none
  };
};
