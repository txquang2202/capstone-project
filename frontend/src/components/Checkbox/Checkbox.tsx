import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ChangeEvent,
} from 'react';

import useIsomorphicEffect from '@/hooks/useIsomorphicEffect';
import { cn as classNames } from '@/lib/classNames';
import { isNotEmptyObject } from '@/lib/validate';

import { useCheckboxContext } from './CheckboxContext';
import useCheckbox from './hooks/useCheckbox';
import type { CheckboxProps, CheckboxRef } from './types';

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const {
    id,
    className,
    name: nameProp,
    value: valueProp,
    disabled: disabledProp,
  } = props;

  const ctx = useCheckboxContext();

  const group = isNotEmptyObject(ctx)
    ? {
        value: ctx.value,
        name: ctx.name ?? nameProp,
        onChange: ctx.onChange,
        disabled: ctx.disabled,
      }
    : {};

  const checkboxRef = useRef<HTMLInputElement>(null);
  const { name, value, onChange, disabled } = group;

  const { getCheckboxProps } = useCheckbox({
    name,
    checked: value?.includes(valueProp as string),
    disabled,
    onChange,
    value: valueProp,
    ...props,
  });

  const trulyDisabled = disabled ?? disabledProp;

  const {
    indeterminate,
    onChange: onChangeProp,
    ...checkboxProps
  } = getCheckboxProps(props);

  useImperativeHandle(ref, () => ({
    focus: () => {
      checkboxRef.current?.focus();
    },
    blur: () => {
      checkboxRef.current?.blur();
    },
    input: checkboxRef?.current,
  }));

  useIsomorphicEffect(() => {
    if (checkboxRef.current)
      checkboxRef.current.indeterminate = Boolean(indeterminate);
  }, [indeterminate]);

  return (
    <input
      id={id}
      className={classNames('it-checkbox', className)}
      ref={checkboxRef}
      onChange={
        !trulyDisabled
          ? onChangeProp
          : (e: ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
            }
      }
      {...checkboxProps}
    />
  );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
