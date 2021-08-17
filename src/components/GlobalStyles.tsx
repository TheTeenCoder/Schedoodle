import { createGlobalStyle } from "styled-components";

interface StyleProps {
  textColor: string;
  bgColor: string;
}

export const GlobalStyles = createGlobalStyle<StyleProps>`
  body {
    color: ${(props) => props.textColor};
    background-color:${(props) => props.bgColor};
  }
`;
