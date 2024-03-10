import { createContext, useContext } from 'react';

import type { RadioGroupContext } from './types';

const Context = createContext<RadioGroupContext>({});
export const RadioGroupProvider = Context.Provider;

export const useRadioGroupContext = () => useContext(Context);
