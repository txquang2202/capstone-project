import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import type { CheckboxProps } from '../types';

const useCheckbox = (props: CheckboxProps = {}) => {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    indeterminate,
    name,
    value,
  } = props;

  const [checked, setChecked] = useState(Boolean(defaultChecked));

  const isChecked = useMemo(
    () => (checkedProp !== undefined ? checkedProp : checked),
    [checked, checkedProp]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      if (checkedProp === undefined)
        isChecked ? setChecked(checked) : setChecked(indeterminate ?? checked);
    },
    [checkedProp, indeterminate, isChecked]
  );

  const getCheckboxProps = useCallback(
    (props: CheckboxProps = {}) => ({
      type: 'checkbox',
      checked: defaultChecked ? undefined : isChecked,
      disabled,
      indeterminate,
      name,
      value,
      onChange: !disabled ? handleChange : undefined,
      ...props,
    }),
    [
      defaultChecked,
      disabled,
      handleChange,
      indeterminate,
      isChecked,
      name,
      value,
    ]
  );

  return { getCheckboxProps, isChecked, handleChange, checked };
};

export default useCheckbox;
