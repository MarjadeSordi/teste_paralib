import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./theme/globalStyle";
import GlobalFonts from './assets/font/fonts'
import '../src/theme/custom.scss'

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyle /> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


