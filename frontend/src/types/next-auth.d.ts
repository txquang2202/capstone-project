// eslint-disable-next-line unused-imports/no-unused-imports
import NextAuth from 'next-auth';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    access_token: string;
    id_token: string;
    expires_at: number;
    refresh_token: string;
    // decoded?: {
    //   realm_access?: {
    //     roles?: string[];
    //   };
    // } | null;
  }
}

declare module 'next-auth' {
  interface Account {
    access_token: string;
    id_token: string;
    expires_at: number;
    refresh_token: string;
  }

  interface Session {
    access_token: string;
    id_token: string;
    expires_at: number;
    refresh_token: string;
    roles: string[];
    error: string | unknown;
  }
}
