import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { getServerSession } from 'next-auth';

import { getAccessToken } from './sessionTokenAccessor';

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri:
      (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000') + '/graphql',
    fetchOptions: { cache: 'no-store' },
  });

  const authLink = setContext((_, { headers }) =>
    getServerSession()
      .then((session) => {
        if (session) {
          return getAccessToken().then((accessToken) => {
            return {
              headers: {
                ...headers,
                authorization: accessToken,
              },
            };
          });
        } else {
          return {
            headers: {
              ...headers,
            },
          };
        }
      })
      .catch((error) => {
        console.log('error-build', error);
        return {
          headers: {
            ...headers,
          },
        };
      })
  );

  return new ApolloClient({
    cache: new InMemoryCache(),
    // link: authLink.concat(httpLink),
    link: ApolloLink.from([authLink, httpLink]),
  });
});
