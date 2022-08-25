import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

function ToggleThemeMode({ children }) {
  const [mode, setMode] = useState('light');

  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleThemeMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleThemeMode;
