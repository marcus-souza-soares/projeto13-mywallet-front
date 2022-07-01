import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Saira+Stencil+One&display=swap');

* {
    box-sizing: border-box;
}
  html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      background: #8C11BE;
  }
  .root{
        font-family: 'Raleway', sans-serif;
        width: 100%;
        height: 100%;
        display: flex;
  } 
`;

export default GlobalStyle;