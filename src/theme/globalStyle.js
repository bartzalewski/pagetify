import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');

  html {
    scroll-behavior: smooth;
	  scrollbar-color: #6b65e7 #f0f0f0;
	  scrollbar-width: thin;
  }

  body {
    font-family: 'Montserrat';
    color: #293347;
    overflow-x: hidden;
    width: 100vw;
  }

  body::-webkit-scrollbar {
    width: 0.75em;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background: -webkit-linear-gradient(top, #36d1dc, #5b86e5);
    outline: 1px solid white;
    border-radius: 1em;
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
