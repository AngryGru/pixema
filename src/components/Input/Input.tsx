import classNames from "classnames";
import React, { FC } from "react";
import "./Input.scss";
import { InputProps } from "../../common/types";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";

const Input: FC<InputProps> = ({
  type,
  name,
  error,
  placeholder,
  className,
  readonly,
  value,
  onBlur,
  onChange,
}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <input
      className={classNames("input", `${className}`, {
        ["error"]: error,
        ["inputLight"]: !isDarkTheme,
      })}
      type={type}
      readOnly={readonly}
      name={name}
      value={value}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

export default Input;
