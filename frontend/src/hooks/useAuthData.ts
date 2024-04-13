// useAuthData.ts - get the authData from provider AuthProvider

import { useContext } from 'react';

import { AuthContext } from '@/provider/AuthProvider';

export default function useAuthData() {
  const { authUser, loading, refetch } = useContext(AuthContext);
  return { authUser, loading, refetch };
}
