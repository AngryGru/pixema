import React, { FC } from "react";
import "./Input.scss";

type InputProps = {
  type: string;
  placeholder?: string;
};

const Input: FC<InputProps> = ({ type, placeholder }) => {
  return <input className={"input"} type={type} placeholder={placeholder} />;
};

export default Input;
