'use client';

import { useQuery } from '@apollo/client';
import React, { createContext, useEffect, useState } from 'react';

import { AUTH_USER } from '@/graphql/auth';
import { AuthUser } from '@/types/auth';

export const AuthContext = createContext<{
  authUser: AuthUser | null;
}>({
  authUser: null,
});
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useQuery(AUTH_USER);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setAuthUser(data?.authUser);
  }, [data]);

  return (
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
