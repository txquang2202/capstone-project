import { type StoreApi, type UseBoundStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Use<T> = { [K in keyof T]: () => T[K] };

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: Use<T> }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as Use<S>)[k as keyof Use<S>] = () =>
      store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export { persist, createJSONStorage };
