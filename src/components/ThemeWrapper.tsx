import React from "react";
import { useThemeColors } from "../hooks/theme";
import { GlobalStyles } from "./GlobalStyles";

const ThemeWrapper = (props: any) => {
  const colors = useThemeColors();

  return (
    <div id="theme-wrapper">
      <GlobalStyles textColor={colors.textColor} bgColor={colors.bgColor} />
      {props.children}
    </div>
  );
};

export default ThemeWrapper;
