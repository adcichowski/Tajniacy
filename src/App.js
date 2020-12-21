import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Game from './views/Game/Game';

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
    font-size: 10px;
}
*,*::after,*::before{
    box-sizing:inherit;
}
body{
    font-size:1.6rem;
    background: #0f0c29;
  background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Game />
    </>
  );
}
