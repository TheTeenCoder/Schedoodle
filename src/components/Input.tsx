import classNames from "classnames";
import React from "react";
import { useThemeColors } from "../hooks/theme";

const Input = (props: any) => {
  const colors = useThemeColors();
  const className = classNames(
    `bg-${colors?.textColor}`,
    `text-${colors?.secondary}`,
    "input"
  );
  return <input {...props} type="text" className={className} />;
};

export default Input;
