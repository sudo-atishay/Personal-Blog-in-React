import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Pages/Home';

// Create a slate blue Material-UI theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#475569', // slate-600
      light: '#64748b', // slate-500
      dark: '#334155', // slate-700
    },
    secondary: {
      main: '#1e293b', // slate-800
      light: '#374151', // slate-700
      dark: '#0f172a', // slate-900
    },
    background: {
      default: '#1e293b', // slate-800
      paper: '#334155', // slate-700
    },
    text: {
      primary: '#f1f5f9', // slate-100
      secondary: '#cbd5e1', // slate-300
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
