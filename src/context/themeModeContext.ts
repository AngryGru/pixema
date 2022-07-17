import React, { useContext } from "react";
import { Theme } from "../common/types";

const defaultValue = {
  theme: Theme.Dark,
};

export type ThemeContextType = {
  children?: any;
  theme: Theme;
  onChangeTheme?: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultValue);

export const useThemeContext = () => useContext(ThemeContext);
