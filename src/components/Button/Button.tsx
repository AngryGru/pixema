import classNames from "classnames";
import React, { FC } from "react";
import "./Button.scss";

const Button = ({ children, className }: any) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
