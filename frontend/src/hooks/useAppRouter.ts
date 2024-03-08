import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

import { getRouteByPath } from '@/configs/router';
import { useLocale } from '@/locale';

const useAppRouter = (href?: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const { locale } = useLocale();

  const getHref = (href: string) => {
    const route = getRouteByPath(href);
    const isStartWithLocale = route?.locales.find((locale) =>
      href.startsWith(`/${locale}`)
    );
    if (isStartWithLocale) return href;
    const _locale =
      route?.locales.find((_locale) => _locale === locale) ||
      route?.defaultLocale;
    return `/${_locale}/${href.replace(/^\//, '')}`;
  };

  const push: typeof router.push = (href, opts) => {
    router.push(getHref(href), opts);
  };

  const replace: typeof router.replace = (href, opts) => {
    router.replace(getHref(href), opts);
  };

  const prefetch: typeof router.prefetch = (href, opts) => {
    router.prefetch(getHref(href), opts);
  };

  const onChangeLang = (lang: string) => {
    if (!pathname) return;
    const query = searchParams?.toString();
    const nextPath = pathname.startsWith(`/${params.lang}`)
      ? pathname.replace(`/${params.lang}`, '')
      : pathname;

    router.replace(`/${lang}/${nextPath}${query ? '?' + query : ''}`);
  };

  return {
    ...router,
    push,
    replace,
    prefetch,
    onChangeLang,
    url: href ? getHref(href) : href,
  };
};

export default useAppRouter;
