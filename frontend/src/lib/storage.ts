import { isString } from '@/lib/validate';

export const localStorageKeys = {
  selectedLanguageCode: 'selectedLanguageCode',
} as const;

type StorageKey = KeyOf<typeof localStorageKeys>;

const stringify = (value: unknown) =>
  isString(value) ? (value as string) : JSON.stringify(value);

export const localStorageStore = (storageKey: StorageKey | string) => {
  const key = localStorageKeys[storageKey as StorageKey] ?? storageKey;

  return {
    remove: () => localStorage.removeItem(key),

    get: <T>(defaultValue?: T) =>
      (localStorage.getItem(key) as string) ?? (defaultValue as T),

    set: (value: unknown) => {
      localStorage.setItem(key, stringify(value));
    },
  };
};
