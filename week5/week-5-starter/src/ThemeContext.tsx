import type { ReactNode } from 'react';

// TODO 3: Add Theme and ThemeContextValue types and createContext.
// This is currently only a layout wrapper. No context exists yet.
export function ThemeProvider({ children }: { children: ReactNode }) {
  // TODO 3: Add useState<'light' | 'dark'> and toggleTheme.
  // Wrap this div with ThemeContext.Provider and use the current theme class.
  return <div className="site light">{children}</div>;
}
