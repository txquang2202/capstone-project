import { useEffect, useRef, useState } from 'react';

import { cloneObject } from '@/lib/cloneObject';
import { set } from '@/lib/set';

import type {
  FieldPath,
  FieldPathValue,
  FieldValues,
  FormNumber,
  FormPattern,
  FormRequired,
} from './type';
import {
  verifyMax,
  verifyMaxLength,
  verifyMin,
  verifyMinLength,
  verifyPattern,
  verifyRequired,
} from './validate';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type Options<T extends FieldValues> = {
  config?: PartialRecord<
    keyof T,
    {
      required?: FormRequired;
      min?: FormNumber;
      max?: FormNumber;
      minLength?: FormNumber;
      maxLength?: FormNumber;
      pattern?: FormPattern;
      debounced?: number;
    }
  >;
  validate?: PartialRecord<
    keyof T,
    (params: {
      value: FieldPathValue<T, keyof T>;
      formValue?: T;
    }) => string | null
  >;
  defaultState: T;
  alwaysCheckError?: boolean;
};

const validateFunction = {
  required: verifyRequired,
  min: verifyMin,
  max: verifyMax,
  minLength: verifyMinLength,
  maxLength: verifyMaxLength,
  pattern: verifyPattern,
};

type Validate = keyof typeof validateFunction;

const defaultError = {
  required: 'requiredText',
  min: 'invalid',
  max: 'invalid',
  minLength: 'invalid',
  maxLength: 'invalid',
  pattern: 'invalid',
};

const useForm = <T extends FieldValues>({
  config,
  validate,
  defaultState,
  alwaysCheckError = false,
}: Options<T>) => {
  const [fields, setFields] = useState<T>(defaultState);
  const [error, setError] = useState({} as Record<keyof T, string>);
  const debounced = useRef({} as Record<keyof T, NodeJS.Timeout>);

  const onChangeDebounce = (value: unknown, field: keyof T) => {
    const _config = config?.[field];
    if (!_config) return;
    clearTimeout(debounced.current?.[field]);
    debounced.current[field] = setTimeout(() => {
      setFields((fields) => ({ ...fields, [field]: value }));
    }, _config.debounced);
  };

  useEffect(() => {
    return () => {
      if (!Object.keys(debounced.current).length) return;
      Object.keys(debounced.current).forEach((key) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const timer = debounced.current[key as keyof T];
        clearTimeout(timer);
      });
    };
  }, []);

  const isParentKey = (path: string, obj: T) => {
    return path in obj;
  };

  const onChangeField = <TPath extends FieldPath<T>>(
    path: TPath,
    value: FieldPathValue<T, TPath>
  ) => {
    if (isParentKey(path, fields) && config?.[path]?.debounced) {
      onChangeDebounce(value, path);
      return;
    }
    setFields((fields) => set(cloneObject(fields), path, value));
  };

  const onError = () => {
    const error = {} as Record<keyof T, string>;
    config &&
      Object.keys(config).forEach((field) => {
        const validate = config[field];
        validate &&
          Object.keys(validate).find((key) => {
            const res = validateFunction[key as Validate](
              validate[key as Validate] as never,
              fields[field] as never
            );

            const err =
              res === true
                ? ''
                : res || defaultError[key as keyof typeof validateFunction];
            error[field as keyof T] = err;
            return err;
          });
      });

    validate &&
      Object.keys(validate).forEach((key) => {
        const _validate = validate[key]?.({
          value: fields[key as keyof T],
          formValue: fields,
        });
        error[key as keyof T] = _validate || '';
      });

    const isError = Object.keys(error).reduce(
      (err: boolean, key: string) => !!error[key as keyof typeof error] || err,
      false
    );

    setError(error);
    return isError;
  };

  const reset = () => {
    setFields(defaultState);
    setError({} as Record<keyof T, string>);
  };

  const handleSubmit = (onSubmit: () => void) => {
    const err = onError();
    if (err) return;
    onSubmit();
  };

  useEffect(() => {
    alwaysCheckError && onError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alwaysCheckError, fields]);

  return {
    fields,
    error,
    onChangeField,
    onError,
    setFields,
    reset,
    handleSubmit,
  };
};

export default useForm;
