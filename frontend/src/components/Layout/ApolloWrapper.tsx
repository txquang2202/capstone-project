'use client';

import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const makeClient = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  const authLink = setContext(async (_, { headers }) => {
    // const { token } = await fetch('/api/auth/token').then((res) => res.json());
    const data = await fetch('/api/auth/token');
    let token = '';
    if (data.status === 401) {
      return {
        headers: {
          ...headers,
        },
      };
    } else {
      try {
        const dataJson = await data.json();
        token = dataJson.token;
      } catch (error) {
        console.log('error', error);
      }
    }

    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  });
  const httpLink = createUploadLink({
    uri: apiUrl + '/graphql',
    headers: {
      'Apollo-Require-Preflight': 'true',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    // link: authLink.concat(httpLink),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink,
            httpLink,
          ])
        : ApolloLink.from([authLink, httpLink]),
  });
};

const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
export default ApolloWrapper;
