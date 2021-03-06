import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fafaf5;
    -webkit-font-smoothing: antialiased;
    color: #343438;
  }

  body, input, button {
    font: 16px Roboto, sans-serif
  }

  button {
    cursor: pointer;
  }
`;
