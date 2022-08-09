import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;

      font-family: 'Nunito Sans', sans-serif;
   }

   body {
      background-color: hsl(207, 26%, 17%);
      color: #eee;
   }
`;

export { GlobalStyle };