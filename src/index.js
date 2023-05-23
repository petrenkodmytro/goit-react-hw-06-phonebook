import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
// import './index.css';

const theme = {
  colors: {
    main: '#212624',
    bgc: '#c8c7cd',
    accentLight: '#9199be',
    accentDark: '#54678f',
    error: '#720017',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
