import classNames from "classnames";
import React from "react";
import { useThemeColors } from "../hooks/theme";
const Title = (props: any) => {
  const colors = useThemeColors();
  const className = classNames(colors?.gradient, 'bg-clip-text text-transparent');
  return (
    <h1 className="text-6xl">
      <span className={className}>{props.children}</span>
    </h1>
  );
};

export default Title;
