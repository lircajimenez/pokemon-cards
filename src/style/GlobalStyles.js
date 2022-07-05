import styled, { createGlobalStyle } from "styled-components";

export const Button = styled.button`
  height: 48px;
  padding: 0 30px;
  border: none;
  border-radius: 22px;
  cursor: pointer;
`;

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
  background-color: hsl(246, 39%, 16%);
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Poppins', sans-serif;
  color: hsl(100, 100%, 99%);
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

`;
