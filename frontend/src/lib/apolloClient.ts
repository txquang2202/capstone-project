import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  Observable,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createAuthLink = () => {
  const request = (operation: any) => {
    // const token: string = localStorage.getItem('token') || '';
    const token = 'ad';
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  };

  return new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle: any;
        Promise.resolve(operation)
          .then((oper) => request(oper))
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );
};

/**
 * Helper functions that handles error cases
 */
const handleErrors = () => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
};

/**
 * Creates a Apollo Client
 *
 * @param {string} apiUrl, GraphQL api url
 * @param {string} websocketApiUrl, GraphQL WebSocket api url
 */
export const createApolloClient = (
  apiUrl: string = process.env.REACT_APP_API_URL || 'http://localhost:4000'
) => {
  const cache = new InMemoryCache();

  const errorLink = handleErrors();
  const authLink = createAuthLink();
  const httpLink = createHttpLink({
    uri: apiUrl + '/graphql',
    fetchOptions: {
      keepAlive: true,
    },
  });

  return new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache,
  });
};

export const client = createApolloClient('http://localhost:4000');
