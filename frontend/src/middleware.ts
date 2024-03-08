/* eslint-disable @typescript-eslint/no-explicit-any */
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

const i18n = {
  defaultLocale: 'vi',
  locales: ['vi', 'en'],
};

function getLocale(request: NextRequest): string {
  const { locales, defaultLocale } = i18n;

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  let response;
  let nextLocale;

  const { locales, defaultLocale } = i18n;

  const pathname = request.nextUrl.pathname;

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathLocale) {
    const isDefaultLocale = pathLocale === defaultLocale;
    if (isDefaultLocale) {
      let pathWithoutLocale = pathname.slice(`/${pathLocale}`.length) || '/';
      if (request.nextUrl.search) pathWithoutLocale += request.nextUrl.search;

      response = NextResponse.redirect(
        new URL(pathWithoutLocale, request.url),
        { headers: { 'x-pathname': pathWithoutLocale } }
      );
    }

    response = NextResponse.next({
      headers: { 'x-pathname': pathname.slice(`/${pathLocale}`.length) },
    });
    nextLocale = pathLocale;
  } else {
    const isFirstVisit = !request.cookies.has('NEXT_LOCALE');

    const locale = isFirstVisit ? getLocale(request) : defaultLocale;

    let newPath = `/${locale}${pathname}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    response =
      locale === defaultLocale
        ? NextResponse.rewrite(new URL(newPath, request.url), {
            headers: { 'x-pathname': pathname },
          })
        : NextResponse.redirect(new URL(newPath, request.url), {
            headers: { 'x-pathname': pathname },
          });
    nextLocale = locale;
  }

  if (!response)
    response = NextResponse.next({ headers: { 'x-pathname': pathname } });

  if (nextLocale) response.cookies.set('NEXT_LOCALE', nextLocale);

  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|images/|favicon/).*)',
};
