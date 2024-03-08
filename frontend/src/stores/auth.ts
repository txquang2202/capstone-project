import { create } from 'zustand';

import { createSelectors } from './createSelectors';

export type AuthStatus = 'loading' | 'unauthorized' | 'authorized';

type State = {
  user: Nullable<unknown>;
  accessToken?: string;
  status: AuthStatus;
};

type Actions = {
  setStatus: (status: State['status']) => void;
  setUser: (user: State['user']) => void;
  reset: () => void;
};

const initialState: State = {
  user: null,
  accessToken: '',
  status: 'loading',
};

export const useAuthStore = createSelectors(
  create<State & Actions>((set) => ({
    ...initialState,
    setStatus: (status) => set({ status }),
    setUser: (user) => set({ user }),
    reset: () => {
      set({ user: null, accessToken: '', status: 'unauthorized' });
    },
  }))
);

export const getAccessToken = () => {
  const accessToken = useAuthStore.getState().accessToken;
  return accessToken || localStorage.getItem('access-token');
};
