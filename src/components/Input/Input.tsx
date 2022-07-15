import classNames from "classnames";
import React, { FC } from "react";
import "./Input.scss";
import { InputProps } from "../../common/types";

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
  return (
    <input
      className={classNames("input", `${className}`, {
        ["error"]: error,
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
