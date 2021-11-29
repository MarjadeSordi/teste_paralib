import { createGlobalStyle } from 'styled-components';
import ItauDisplay from './ItauDisplay.ttf'

export default createGlobalStyle`
@font-face {
  font-family: 'ItauDisplay';
  src: local('ItauDisplay'),
  url(${ItauDisplay}) format('truetype');
  font-weight: 300;
  font-style: normal;
}
`;