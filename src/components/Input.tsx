import classNames from "classnames";
import React from "react";
import { useThemeColors } from "../hooks";

const Input = (props: any) => {
  const colors = useThemeColors();
  const className = classNames(
    `bg-${colors?.primary}`,
    `text-${colors?.secondary}`,
    "px-4 py-2 rounded-xl shadow-xl"
  );
  return <input {...props} type="text" className={className} placeholder="add schedule..."/>
};

export default Input;