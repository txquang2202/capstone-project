import { forwardRef, type ChangeEvent } from 'react';

import useUncontrolled from '@/hooks/useUncontrolled';
import { cn as classNames } from '@/lib/classNames';

import { RadioGroupProvider } from '../RadioContext';
import type { RadioGroupProps } from '../types';

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      children,
      className,
      value: valueProp,
      defaultValue,
      disabled,
      onChange,
      name,
      label,
      required,
      ...other
    },
    ref
  ) => {
    const [value, setValue] = useUncontrolled({
      value: valueProp,
      defaultValue,
      finalValue: '',
      onChange,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
      setValue(event.currentTarget.value);

    return (
      <RadioGroupProvider
        value={{ onChange: handleChange, value, name, disabled }}
      >
        {!!label && (
          <label>
            {label}{' '}
            {required && <span className='text-[var(--danger)]'>*</span>}
          </label>
        )}
        <div
          role='radiogroup'
          ref={ref}
          className={classNames('poc-radio-group', className)}
          {...other}
        >
          {children}
        </div>
      </RadioGroupProvider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
