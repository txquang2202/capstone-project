'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

const makeClient = () => {
  const httpLink = new HttpLink({
    uri:
      (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000') + '/graphql',
  });

  // const authLink = setContext((_, { headers }) =>
  //   getServerSession().then((session) => {
  //     if (session) {
  //       return getAccessToken().then((accessToken) => {
  //         return {
  //           headers: {
  //             ...headers,
  //             authorization: accessToken,
  //           },
  //         };
  //       });
  //     } else {
  //       return {
  //         headers: {
  //           ...headers,
  //         },
  //       };
  //     }
  //   })
  // );

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    // link: authLink.concat(httpLink),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : ApolloLink.from([httpLink]),
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
