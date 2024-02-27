import { isNotEmpty, isObject } from '@/lib/validate';

import { FormNumber, FormPattern, FormRequired } from './type';

export const verifyRequired = (config: FormRequired, value: unknown) => {
  if (isObject(config)) {
    return config.value === isNotEmpty(value) || config.message;
  }
  return config ? isNotEmpty(value) : true;
};

export const verifyMin = (config: FormNumber, value: number) => {
  if (isObject(config)) {
    return config.value <= value || config.message;
  }
  return config <= value;
};

export const verifyMax = (config: FormNumber, value: number) => {
  if (isObject(config)) {
    return config.value >= value || config.message;
  }
  return config >= value;
};

export const verifyMinLength = (config: FormNumber, value: string) => {
  if (isObject(config)) {
    return config.value <= value.length || config.message;
  }
  return config <= value.length;
};

export const verifyMaxLength = (config: FormNumber, value: string) => {
  if (isObject(config)) {
    return config.value >= value.length || config.message;
  }
  return config >= value.length;
};

export const verifyPattern = (config: FormPattern, value: string) => {
  if (typeof config === 'string' || config instanceof RegExp) {
    return !!value.match(config);
  }
  return !!value.match(config.value) || config.message;
};
