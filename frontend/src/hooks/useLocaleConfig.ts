import { useEffect, useState } from 'react';

import { DEFAULT_LOCALE, LANGUAGES_CODE } from '@/constant/config';
import { localStorageKeys, localStorageStore } from '@/lib/storage';

const DEFAULT_LOCALE_CONFIG = {
  locales: {
    [LANGUAGES_CODE.en]: `/api/staticdata?url=locales/en.json`,
    [LANGUAGES_CODE.vi]: `/api/staticdata?url=locales/vi.json`,
  },
  localeConfig: {
    [LANGUAGES_CODE.vi]: {
      code: 1,
    },
    [LANGUAGES_CODE.en]: {
      code: 2,
    },
  },
  localeStorageKey: localStorageKeys.selectedLanguageCode,
  defaultLocale: DEFAULT_LOCALE,
} as const;

const useLocaleConfig = (lang: string) => {
  const [localeConfig, setLocaleConfig] = useState<{
    locale: typeof DEFAULT_LOCALE_CONFIG;
    loading: boolean;
  }>({
    locale: DEFAULT_LOCALE_CONFIG,
    loading: true,
  });

  useEffect(() => {
    const config = { ...DEFAULT_LOCALE_CONFIG };
    config.defaultLocale = lang;
    localStorageStore(localStorageKeys.selectedLanguageCode).set(
      config.defaultLocale
    );
    setLocaleConfig({ locale: config, loading: false });
  }, [lang]);

  return localeConfig;
};

export default useLocaleConfig;
