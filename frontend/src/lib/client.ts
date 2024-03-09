import { HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { getServerSession } from 'next-auth';

import { getAccessToken } from './sessionTokenAccessor';

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri:
      (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000') + '/graphql',
  });

  const authLink = setContext((_, { headers }) =>
    getServerSession().then((session) => {
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
  );

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
