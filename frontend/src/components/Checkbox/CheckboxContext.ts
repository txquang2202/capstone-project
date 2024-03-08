import { createContext, useContext } from 'react';

import type { CheckboxContext } from './types';

const Context = createContext<CheckboxContext>({});
export const CheckboxGroupProvider = Context.Provider;

export const useCheckboxContext = () => useContext(Context);
