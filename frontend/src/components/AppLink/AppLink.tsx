import Link from 'next/link';
import { forwardRef } from 'react';

import useAppRouter from '@/hooks/useAppRouter';

import { Button, type ButtonProps } from '../Button';

type AppLinkProps = {
  href: string;
  useButton?: boolean;
  nextLink?: boolean;
} & ButtonProps;

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ href, nextLink = true, children, ...rest }, ref) => {
    const route = useAppRouter(href);

    if (nextLink && route.url) {
      return (
        <Link href={route.url} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <Button ref={ref} href={route.url as never} {...rest}>
        {children}
      </Button>
    );
  }
);

AppLink.displayName = 'AppLink';

export default AppLink;
