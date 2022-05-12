import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700&display=swap');

 * {
    box-sizing: border-box;
  }
  *,
*::after,
*::before {
  box-sizing: inherit;
}
h3,h4 {
  margin: 0;
}
  header, h3 {
    font-family: 'Raleway', sans-serif;
    overflow: hidden;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.8;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
