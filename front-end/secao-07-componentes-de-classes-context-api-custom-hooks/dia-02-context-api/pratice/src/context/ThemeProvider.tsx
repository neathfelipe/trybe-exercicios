// /src/context/ThemeProvider.tsx

import { useState } from 'react';
import ThemeContext, { ThemeType } from './ThemeContext';

type ThemeProviderProps = {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [pageTheme, setPageTheme] = useState<ThemeType>('dark');

  function toggleTheme() {
    setPageTheme(prevState => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme: pageTheme, toggleTheme }}>
      <div className={ pageTheme }>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
