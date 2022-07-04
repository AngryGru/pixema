import React from "react";
import "./Switch.scss";

const onClickTheme = () => {
  // theme === Theme.Light
  //   ? onChangeTheme(Theme.Dark)
  //   : onChangeTheme(Theme.Light);
};

const Switch = () => {
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
