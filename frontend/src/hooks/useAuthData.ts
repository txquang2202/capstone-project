// useAuthData.ts - get the authData from provider AuthProvider

import { useContext } from 'react';

import { AuthContext } from '@/provider/AuthProvider';

export default function useAuthData() {
  const { authUser } = useContext(AuthContext);
  return authUser;
}
