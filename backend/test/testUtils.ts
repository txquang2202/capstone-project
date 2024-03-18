import {
  ApolloClient,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { PrismaClient } from "@prisma/client";
import fetch from "cross-fetch";

export async function createApolloClient() {
  const link = new HttpLink({
    uri: "http://localhost:4000/graphql",
    fetch,
  });
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
  };
  const authLink = setContext((_, { headers }) =>
    // return the headers to the context so httpLink can read them
    ({
      headers: {
        ...headers,
        authorization: "baodeptrai",
      },
    }),
  );
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
    defaultOptions,
  });

  return client;
}

export function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL;

  return new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
  });
}
