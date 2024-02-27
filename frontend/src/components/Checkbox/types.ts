import type { ChangeEvent, FocusEvent, ReactNode } from 'react';

export type CheckboxProps = {
  id?: string;
  name?: string;
  'data-testid'?: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: string;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
};

export type CheckboxRef = {
  focus?: () => void;
  blur?: () => void;
  input: HTMLInputElement | null;
};

export type CheckboxGroupProps = {
  name?: string;
  children?: ReactNode;
  className?: string;
  value?: string[];
  defaultValue?: string[];
  disabled?: boolean;
  onChange?: (values: string[]) => void;
};

export type CheckboxContext = {
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string[];
};
