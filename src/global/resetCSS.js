import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    list-style: none;
  }
`;

export default ResetCSS;