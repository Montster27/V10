// /Users/montysharma/Documents/V10/simplified/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { store } from './store';
import miamiRetroTheme from './config/themes/variations/miami-retro-theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={miamiRetroTheme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
