import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';

const theme = {
  colors: {
    gray: '#D3D3D3',
    light: '#f2f2f2',
    dark: '#808080',
    error: '#D21404',
  },
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
    
  </React.StrictMode>
);
