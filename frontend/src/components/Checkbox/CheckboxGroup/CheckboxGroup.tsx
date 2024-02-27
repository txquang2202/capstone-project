import { forwardRef, useMemo } from 'react';

import { cn as classNames } from '@/lib/classNames';

import { CheckboxGroupProvider } from '../CheckboxContext';
import useCheckboxGroup from '../hooks/useCheckboxGroup';
import type { CheckboxGroupProps } from '../types';

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    const { disabled, name, className, children } = props;
    const { getRootProps, handleChange, value, defaultValue } =
      useCheckboxGroup(props);

    const group = useMemo(
      () => ({
        onChange: handleChange,
        value,
        disabled,
        name,
      }),
      [handleChange, value, disabled, name]
    );

    return (
      <CheckboxGroupProvider value={group}>
        <div
          ref={ref}
          className={classNames('poc-checkbox-group', className)}
          onChange={handleChange}
          {...getRootProps()}
          defaultValue={defaultValue}
        >
          {children}
        </div>
      </CheckboxGroupProvider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';
export default CheckboxGroup;
