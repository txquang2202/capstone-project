import type { ChangeEvent, ReactNode } from 'react';

export type RadioProps = {
  id?: string;
  name?: string;
  className?: string;
  size?: 'large' | 'medium' | 'small';
  value?: string;
  disabled?: boolean;
  style?: CSSProperties;
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string;
  required?: boolean;
  'data-testid'?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type RadioGroupProps = Omit<
  RadioProps,
  'onChange' | 'defaultChecked' | 'checked'
> & {
  defaultValue?: string;
  children?: ReactNode;
  onChange?: (value: string) => void;
};

export type RadioGroupContext = {
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
