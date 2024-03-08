import { useEffect, useLayoutEffect } from 'react';

// https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
const useIsomorphicEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicEffect;
