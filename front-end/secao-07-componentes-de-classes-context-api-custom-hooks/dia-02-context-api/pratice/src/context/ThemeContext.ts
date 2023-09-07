// /src/context/ThemeContext.ts

import { createContext } from 'react';

export type ThemeType = 'dark' | 'light';

type ThemeContextType = {
  theme: ThemeType
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
