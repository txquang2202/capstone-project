export const stringToPath = <T extends string>(
  stringPath: T,
  path: string[] = []
): string[] => {
  const match = stringPath.match(/^([^.]+)\.(.*)/);
  if (!match) return [...path, stringPath];

  const [, key, rest] = match;
  return stringToPath(rest, [...path, key]);
};
