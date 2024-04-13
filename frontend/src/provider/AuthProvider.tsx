'use client';

import { useQuery } from '@apollo/client';
import React, { createContext, useEffect, useState } from 'react';

import { AUTH_USER } from '@/graphql/auth';
import { AuthUser } from '@/types/auth';

export const AuthContext = createContext<{
  authUser: AuthUser | null;
  loading: boolean;
  refetch: () => void;
}>({
  authUser: null,
  loading: false,
  refetch: () => {
    return [];
  },
});
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, refetch } = useQuery(AUTH_USER);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setAuthUser(data?.authUser);
  }, [data]);

  return (
    <AuthContext.Provider value={{ authUser, loading, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
