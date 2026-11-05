import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// TODO 3: Import ThemeProvider and wrap <App /> with it.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="site light"><App /></div>
  </StrictMode>
);
