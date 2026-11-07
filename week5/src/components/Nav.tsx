import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Nav() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Nav needs ThemeProvider');
  const { theme, toggleTheme } = context;

  return (
    <nav aria-label="Main navigation">
      <a href="#search">Recipe Finder</a>
      <a href="#recipes">Recipes</a>
      <a href="#contact">Contact</a>
      <button onClick={toggleTheme} aria-pressed={theme === 'dark'}>
        {theme === 'light' ? 'Use dark theme' : 'Use light theme'}
      </button>
    </nav>
  );
}
