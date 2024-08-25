import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    justify-content: center;
  }

  .container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    height: 600px;
  }
  
  p, span, a, button {
    margin: 0;
    padding: 0;
  }
`;
