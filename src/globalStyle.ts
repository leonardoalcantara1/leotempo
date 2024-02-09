import { createGlobalStyle } from 'styled-components';
import style from './style.json'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${style.colors.text};
    font-size: ${style.font.size};
    font-family: ${style.font.secondary.family};
    background: ${style.colors.background};
    input, button {
      font-family: ${style.font.secondary.family};
    }
  }

  .title {
    font-family: ${style.font.primary.family};
  }
`;

export default GlobalStyle;
