// eslint-disable-next-line unused-imports/no-unused-imports
import NextAuth from 'next-auth';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    access_token: string;
    id_token: string;
    expires_at: number;
    refresh_token: string;
    decoded: {
      exp: number;
      iat: number;
      auth_time: number;
      jti: string;
      iss: string;
      aud: string;
      sub: string;
      typ: string;
      azp: string;
      session_state: string;
      acr: string;
      realm_access: {
        roles: string[];
      };
      resource_access: Record<string, { roles: string[] }>;
      scope: string;
      email_verified: boolean;
      preferred_username: string;
      given_name: string;
      family_name: string;
      email: string;
    };
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
    user: {
      email: string;
      id: string;
      name: string;
    };
  }
}
