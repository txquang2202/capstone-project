import { useCallback, type ChangeEvent } from 'react';

import useUncontrolled from '@/hooks/useUncontrolled';

import { CheckboxGroupProps } from '../types';

const useCheckboxGroup = ({
  defaultValue,
  disabled,
  onChange,
  name,
  value,
}: CheckboxGroupProps) => {
  const [values, setValues] = useUncontrolled({
    defaultValue,
    finalValue: [],
    value,
    onChange,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: selectedValue } = event.target;
    setValues(
      values.includes(selectedValue)
        ? values.filter((item) => item !== selectedValue)
        : [...values, selectedValue]
    );
  };

  const getRootProps = useCallback(
    () => ({
      value: values,
      defaultValue,
      disabled,
      name,
      role: 'group',
    }),
    [defaultValue, disabled, name, values]
  );

  return {
    getRootProps,
    name,
    disabled,
    value: values,
    setValues,
    handleChange,
    defaultValue,
  };
};

export default useCheckboxGroup;
