import { forwardRef, type ChangeEvent } from 'react';

import { cn as classNames } from '@/lib/classNames';
import { isNotEmptyObject } from '@/lib/validate';

import { useRadioGroupContext } from './RadioContext';
import type { RadioProps } from './types';

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    className,
    onChange: onChangeProp,
    value: valueProp,
    name: nameProp,
    disabled: disabledProp,
    defaultChecked,
    size = 'small',
    ...otherInputProps
  } = props;

  const ctx = useRadioGroupContext();

  const group = isNotEmptyObject(ctx)
    ? {
        checked: ctx.value === valueProp,
        name: nameProp ?? ctx.name,
        onChange: ctx.onChange,
        disabled: ctx.disabled,
      }
    : {};

  const { name, checked, onChange: onChangeGroup, disabled } = group;
  const truthyDisabled = disabled ?? disabledProp;

  return (
    <input
      type='radio'
      className={classNames('it-radio', className, size)}
      ref={ref}
      value={valueProp}
      {...group}
      name={name}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={truthyDisabled}
      onChange={
        !truthyDisabled
          ? onChangeProp ?? onChangeGroup
          : (e: ChangeEvent<HTMLInputElement>) => e.preventDefault()
      }
      {...otherInputProps}
    />
  );
});

Radio.displayName = 'Radio';

export default Radio;
