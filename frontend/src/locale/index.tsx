// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useEffect } from 'react';
import { create } from 'zustand';

import dayjs from '@/lib/dayjs';

import type {
  LocaleArguments,
  LocaleContext,
  LocaleData,
  LocaleExtendParams,
  LocaleStore,
} from './types';

let localeStorageKey = 'selectedLanguageCode';

let defaultLocale = 'vi';

let locales: LocaleData = {};

const localeDataKey = 'locales';

const translations: Record<string, LocaleData> = {};

const isClient = typeof window !== 'undefined';

const isDev = process.env.NODE_ENV === 'development';

const getBrowserLanguage = () => {
  if (typeof navigator !== 'undefined') {
    return navigator.language.split('-')[0];
  }

  return '';
};

const getLocaleFromLocalStorage = () =>
  isClient && localStorage.getItem(localeStorageKey);

const setLocaleToLocalStorage = (locale: string) =>
  isClient && localStorage.setItem(localeStorageKey, locale);

const getLocaleStorageKey = (locale: string) => `${localeDataKey}/${locale}`;

const setLocaleStorage = (locale: string, data: Record<string, string>) => {
  localStorage.setItem(getLocaleStorageKey(locale), JSON.stringify(data));
};

const getLocaleStorage = (locale: string) => {
  const storage = localStorage.getItem(getLocaleStorageKey(locale));
  return storage ? JSON.parse(storage) : null;
};

const getLocaleFromUrl = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const localeParam = urlParams.get('lang');
  return localeParam === 'vn' ? 'vi' : localeParam;
};

const getPlural = (count: number, locale: string) => {
  if (typeof Intl == 'object' && typeof Intl.PluralRules == 'function') {
    return new Intl.PluralRules(locale).select(count);
  }

  return count === 0 ? 'zero' : count === 1 ? 'one' : 'other';
};

export const t = (
  locale: string,
  key?: string,
  args?: LocaleArguments,
  extendParams?: LocaleExtendParams
) => {
  const currentLocale = locale ?? defaultLocale;
  let currentKey: unknown = key;
  const translationData = translations[currentLocale];

  if (!translationData) {
    return '';
  }

  if (extendParams?.count) {
    let newKey = currentKey;
    const plural = getPlural(extendParams.count, currentLocale);
    newKey +=
      extendParams.count === 0
        ? '.zero'
        : plural === 'other'
        ? '.many'
        : `.${plural}`;
    if (translationData[newKey as string]) {
      currentKey = newKey;
    }
  }
  const content = translationData[currentKey as string];

  if (typeof content !== 'string' && !extendParams?.returnObject) {
    if (!currentKey || !(currentKey as string).includes('{{')) {
      isDev && console.warn(`[locale]: Missing translation for ${key}`);
      return typeof currentKey === 'string' ? currentKey : '';
    }

    const keys = (currentKey as string).match(/{{(.*?)}}/g) || [];
    keys.forEach((key) => {
      const value = translationData[key.replace('{{', '').replace('}}', '')];
      if (value) {
        currentKey = (currentKey as string).replace(key, value);
      }
    });
    return currentKey as string;
  }

  if (args?.length && content.includes('{')) {
    const params = (content.match(/{(.*?)}/g) || []).map(
      (n) => +n.replace(/"/g, '').replace('{', '').replace('}', '')
    );

    return params.length
      ? params.reduce((rs, k) => {
          return rs.replace(
            `{${k}}`,
            (args[k as unknown as keyof typeof args] as string) ?? ''
          );
        }, content)
      : content;
  }
  return content;
};

const getLocaleDataFromLocal = (locale: string) => {
  console.error('locale - get locale from local with key ' + locale);
  // Get from local storage
  const storage = getLocaleStorage(locale);
  if (storage) {
    translations[locale] = storage;
    setLocaleToLocalStorage(locale);
    return storage;
  }

  return null;
};

const fetchLocale = async (locale: string) => {
  if (translations[locale]) {
    return translations[locale];
  }

  const url = locales[locale];
  if (!url) {
    console.error('[locale]: locale is not supported', locale);
    return null;
  }

  try {
    const response = await fetch(url);
    const data = response.ok ? await response.json() : null;
    if (!data) return getLocaleDataFromLocal(locale);

    translations[locale] = typeof data === 'object' ? data : JSON.parse(data);
    setLocaleToLocalStorage(locale);
    setLocaleStorage(locale, translations[locale]);

    return data;
  } catch (error) {
    console.error(`[locale]: error`, error);
    return getLocaleDataFromLocal(locale);
  }
};

const useLocaleStore = create<LocaleStore>((set) => ({
  locale: '',
  config: {},
  hasData: false,
  setLocale: async (locale: string, localeConfig) => {
    const data = await fetchLocale(locale);
    if (dayjs.locale() !== locale) dayjs.locale(locale);
    const config = localeConfig?.[locale];

    if (data) {
      set(() => ({ locale, hasData: true, config }));
    }
  },
}));

const initLocale = (detectBrowserLanguage: boolean, ssrLocale?: string) => {
  const locale = ssrLocale || getLocaleFromUrl() || getLocaleFromLocalStorage();

  if (locale && locales[locale]) {
    return locale;
  }

  if (detectBrowserLanguage) {
    const browserLang = getBrowserLanguage();
    return locales[browserLang] ? browserLang : defaultLocale;
  }

  return defaultLocale;
};

export const LocaleProvider = ({
  locales: _locales,
  localeStorageKey: _localeStorageKey = localeStorageKey,
  localeConfig,
  defaultLocale: _defaultLocale = defaultLocale,
  detectBrowserLanguage,
  children,
  ssr,
  ssrLocale,
}: LocaleContext) => {
  const setLocale = useLocaleStore((state) => state.setLocale);
  const locale = useLocaleStore((state) => state.locale);
  const hasData = useLocaleStore((state) => state.hasData);

  useEffect(() => {
    localeStorageKey = _localeStorageKey;
    defaultLocale = _defaultLocale;
    locales = _locales;
    const locale = initLocale(!!detectBrowserLanguage, ssrLocale);
    setLocale(locale, localeConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_defaultLocale]);

  if (!ssr && (!hasData || !locale)) {
    return <></>;
  }

  return children;
};

export const useLocale = () => {
  const { locale, ...rest } = useLocaleStore();

  return {
    ...rest,
    locale: locale || defaultLocale,
    t: (
      key: string,
      args?: LocaleArguments,
      extendParams?: LocaleExtendParams
    ) => t(locale, key, args, extendParams),
  };
};
