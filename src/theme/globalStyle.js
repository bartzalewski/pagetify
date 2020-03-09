import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');

  body {
    font-family: 'Montserrat';
    font-size: 18px;
    color: #293347;
    overflow-x: hidden;
    width: 100vw;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    width: 1140px;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
