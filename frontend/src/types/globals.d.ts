import { CSSProperties } from 'react';

declare global {
  type DefaultProps = {
    className?: string;
    style?: CSSProperties;
    id?: string;
    'data-testid'?: string;
  };

  type Nullable<T> = T | null;
  type KeyOf<T> = keyof T;

  type DataResponse<K extends PropertyKey, T> = { [P in K]: T };
}
