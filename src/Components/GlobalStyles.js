import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  body{
    padding-top: 50px;
    color: white;
    background-color:rgba(20, 20, 20, 1);
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default globalStyles;
