import { useState } from "react";
import themeConfig from "../theme";

type Theme = "default" | "ocean";

export const useTheme = () => {
  let storage: string = JSON.parse(
    localStorage.getItem("settings") || "{}"
  ).theme;
  let theme: Theme = "default";

  let themeList: string[] = ["default", "ocean"];

  if (!storage) {
    theme = "default";
  }
  if (!themeList.includes(storage)) {
    theme = "default";
  }
  return theme;
};

export const useThemeColors = () => {
  const theme = useTheme();

  if (!theme) {
    return themeConfig.theme.default;
  }

  let themeList: string[] = ["default", "ocean"];

  if (themeList.includes(theme)) {
    return themeConfig.theme[theme];
  }
  return null;
};
