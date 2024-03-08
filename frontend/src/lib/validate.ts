type Dict<T = unknown> = Record<string, T>;

export const isObject = (object: unknown): object is Dict => {
  const typeCheck = typeof object === 'object' || typeof object === 'function';
  return (
    object !== null &&
    typeCheck &&
    !Array.isArray(object) &&
    !(object instanceof Date)
  );
};

export const isFunction = <T>(func: unknown): func is T => {
  return typeof func === 'function';
};

export const isNotEmptyObject = (value: unknown) => {
  return isObject(value) && !!Object.keys(value).length;
};

export const isString = (val: unknown) =>
  typeof val === 'string' || val instanceof String;

export const isHasValue = (val: unknown) => val != null && val != undefined;

export const isNotEmpty = (val: unknown) =>
  isHasValue(val) && `${val}`.trim().length > 0;

export const isEmail = (val: unknown) => {
  return (
    isString(val) &&
    isNotEmpty(val) &&
    !!`${val}`.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );
};

export const isNumeric = (n: unknown): boolean =>
  isNotEmpty(n) && !isNaN(parseFloat(n as string)) && isFinite(n as number);

export const isDate = (value: unknown) => value instanceof Date;

export const isFile = (value: unknown) => value instanceof File;
