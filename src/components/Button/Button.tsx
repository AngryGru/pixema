import classNames from "classnames";
import React, { FC } from "react";
import "./Button.scss";

type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  className: string;
  children: string;
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames("btn", `${className}`, {
        ["disabled"]: disabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
