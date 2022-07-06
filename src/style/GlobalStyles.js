import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
  background-image: linear-gradient(to right top, 
    #051937, 
    #004d7a, 
    #008793, 
    #00bf72, 
    #a8eb12
    );
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Poppins', sans-serif;
  color: rgb(252, 255, 250);
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

export const Button = styled.button`
  height: 48px;
  padding: 0 30px;
  border: none;
  border-radius: 22px;
  box-shadow: 5px 5px 10px 1px rgb(0 0 0 / 20%);
  cursor: pointer;

  @media (min-width: 200px) and (max-width: 620px) {
    padding: 10px 20px;
    font-size: 0.85em;
  }
`;
