import { stringToPath } from './stringToPath';
import { isObject } from './validate';

export const set = <T extends Record<string, unknown>>(
  object: T,
  stringPath: string,
  value: unknown
): T => {
  let index = -1;
  const path = stringToPath(stringPath);
  const lastIndex = path.length - 1;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let currentObject: any = object;

  while (++index <= lastIndex) {
    const key = path[index];
    let newValue: unknown = value;

    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue)
        ? objValue
        : !isNaN(+path[index + 1])
        ? []
        : {};
    }
    currentObject[key] = newValue;
    currentObject = currentObject[key] as never;
  }
  return object;
};
