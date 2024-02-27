import { isObject } from './validate';

const isWeb =
  typeof window !== 'undefined' &&
  typeof window.HTMLElement !== 'undefined' &&
  typeof document !== 'undefined';

const isPlainObject = (tempObject: object) => {
  const prototypeCopy =
    tempObject.constructor && tempObject.constructor.prototype;

  return (
    // eslint-disable-next-line no-prototype-builtins
    isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf')
  );
};

export const cloneObject = <T>(data: T): T => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let copy: any;
  const isArray = Array.isArray(data);

  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (
    !(isWeb && (data instanceof Blob || data instanceof FileList)) &&
    (isArray || isObject(data))
  ) {
    copy = isArray ? [] : {};

    if (!isArray && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key)) {
          copy[key] = cloneObject(data[key as keyof T]);
        }
      }
    }
  } else {
    return data;
  }

  return copy;
};
