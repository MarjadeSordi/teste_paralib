import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  }
  html{
    text-rendering: optimizeLegibility;
}


`;

export default GlobalStyle;
