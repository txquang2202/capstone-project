'use client';

import { useQuery } from '@apollo/client';
import React, { createContext, useEffect, useState } from 'react';

import { AUTH_USER } from '@/graphql/auth';
import { AuthUser } from '@/types/auth';

export const AuthContext = createContext<{
  authUser: AuthUser | null;
  loading: boolean;
}>({
  authUser: null,
  loading: false,
});
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading } = useQuery(AUTH_USER);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setAuthUser(data?.authUser);
  }, [data]);

  return (
    <AuthContext.Provider value={{ authUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
