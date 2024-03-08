import { cva, type VariantProps } from 'class-variance-authority';
import Link, { type LinkProps } from 'next/link';
import {
  createElement,
  forwardRef,
  type MouseEvent,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/classNames';

import { Spinner } from '../Spinner';

const buttonClasses = cva(['it-button'], {
  variants: {
    intent: {
      primary: [''],
      secondary: [''],
      other: [''],
      subtle: [''],
      transparent: [''],
    },
    variant: {
      button: '',
      outline: '',
      fill: '',
      subtle: '',
      transparent: '',
      icon: 'it-button-variant-icon',
      'icon-button': 'it-button-variant-icon-button',
    },
    disabled: {
      false: '',
      true: 'cursor-not-allowed',
    },
    size: {
      small: [''],
      medium: ['it-button-medium'],
      large: ['it-button-large'],
      xl: ['it-button-xl'],
    },
  },
  compoundVariants: [
    {
      intent: ['primary', 'secondary', 'other', 'subtle'],
      variant: ['button', 'icon-button'],
      class: 'it-button-border',
    },
    {
      intent: ['primary'],
      variant: ['button', 'icon-button'],
      class: 'it-button-primary',
    },
    {
      intent: ['secondary'],
      variant: ['button', 'icon-button'],
      class: 'it-button-secondary',
    },
    {
      intent: ['other'],
      variant: ['button'],
      class: 'it-button-other',
    },
    {
      intent: ['subtle'],
      variant: ['button'],
      class: 'it-button-subtle',
    },
    {
      intent: ['transparent'],
      variant: ['button', 'icon-button'],
      class: 'it-button-transparent',
    },
    {
      intent: ['other'],
      variant: ['icon-button'],
      class: 'it-button-variant-icon-button-other',
    },
    {
      intent: ['subtle'],
      variant: ['icon-button'],
      class: 'it-button-variant-icon-button-subtle',
    },
    {
      intent: ['primary'],
      disabled: false,
      variant: ['button', 'icon-button'],
      class: 'it-button-box-shadow',
    },
    {
      intent: ['secondary'],
      disabled: false,
      variant: ['button', 'icon-button'],
      class: 'it-button-box-shadow',
    },
    {
      intent: ['other'],
      disabled: false,
      variant: ['button', 'icon-button'],
      class: 'it-button-box-shadow',
    },
    {
      intent: ['primary'],
      disabled: true,
      variant: ['button', 'icon-button'],
      class: 'it-button-primary-disabled',
    },
    {
      intent: ['secondary'],
      disabled: true,
      variant: ['button', 'icon-button'],
      class: 'it-button-secondary-disabled',
    },
    {
      intent: ['subtle'],
      disabled: true,
      variant: ['button', 'icon-button'],
      class: 'it-button-subtle-disabled',
    },
    {
      intent: ['other'],
      disabled: true,
      variant: ['button', 'icon-button'],
      class: 'it-button-other-disabled',
    },
    {
      intent: ['transparent'],
      disabled: true,
      variant: ['button', 'icon-button'],
      class: 'it-button-transparent-disabled',
    },
    {
      variant: ['icon'],
      disabled: true,
      class: 'it-button-variant-icon-disabled',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'large',
    variant: 'button',
    disabled: false,
  },
});

type ButtonBaseProps = {
  variant?: 'button' | 'icon' | 'icon-button';
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  active?: boolean; // For icon or and transparent
  href?: string;
  shallow?: boolean; // For next/link
} & React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses>;

export type ButtonProps = ButtonBaseProps &
  (
    | (Omit<JSX.IntrinsicElements['a'], 'href' | 'onClick' | 'ref'> & LinkProps)
    | (Omit<JSX.IntrinsicElements['button'], 'onClick' | 'ref'> & {
        href?: never;
      })
  );

const SPINNER_COLOR = {
  primary: 'white',
  secondary: 'pink',
  transparent: 'primary',
  other: 'text-primary-color',
  subtle: 'subtle',
} as const;

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      intent = 'primary',
      size,
      disabled,
      icon,
      loading,
      active,
      href,
      type,
      shallow,
      children,
      variant,
      onClick,
      style,
      ...rest
    }: ButtonProps,
    forwardedRef
  ) => {
    const isLink = typeof href !== 'undefined';
    const isActive = active && (variant === 'icon' || intent === 'transparent');
    const elementType = isLink ? 'a' : 'button';

    const element = createElement(
      elementType,
      {
        ...rest,
        disabled,
        type: !isLink ? type : undefined,
        ref: forwardedRef,
        className: cn(
          buttonClasses({ intent, size, className, variant, disabled }),
          {
            'it-button-active': isActive,
            'pointer-events-none': loading,
            'w-[40px] h-[40px]': ['icon', 'icon-button'].includes(
              variant as string
            ),
          },
          className
        ),
        style,
        onClick:
          disabled || loading
            ? (e: MouseEvent<HTMLElement, MouseEvent>) => {
                e.preventDefault();
              }
            : onClick,
      },
      <>
        {!!icon && !loading && (
          <span
            className={cn('it-button-icon', {
              'mr-2': !variant || variant === 'button',
            })}
          >
            {icon}
          </span>
        )}
        <Spinner
          style={{
            color: `var(--${
              SPINNER_COLOR[intent as keyof typeof SPINNER_COLOR]
            })`,
          }}
          className='mr-4'
          loading={loading}
        />
        {children}
      </>
    );

    return href ? (
      <Link passHref href={href} shallow={shallow} legacyBehavior>
        {element}
      </Link>
    ) : (
      element
    );
  }
);

Button.displayName = 'Button';

export default Button;
