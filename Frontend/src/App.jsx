import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './pages/coordinator/ErrorBoundary'; // Updated import path
import TrainingProgrammeDashboard from './pages/coordinator/TrainingProgrammeDashboard';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<TrainingProgrammeDashboard />} />
            <Route path="/coordinator" element={<TrainingProgrammeDashboard />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
