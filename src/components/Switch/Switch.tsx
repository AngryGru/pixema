import React, { useEffect, useState } from "react";
import "./Switch.scss";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";

const Switch = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();

  const onClickTheme = () => {
    theme === Theme.Dark
      ? onChangeTheme(Theme.Light)
      : onChangeTheme(Theme.Dark);
  };

  return (
    <div className="themeToggle">
      <label className="switch">
        <input type="checkbox" onClick={() => onClickTheme()} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;
