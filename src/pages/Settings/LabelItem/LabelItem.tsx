import React, { FC } from "react";
import Input from "../../../components/Input";
import "./LabelItem.scss";

type LabelItemProps = {
  title: string;
  inputType: string;
  inputPlaceholder: string;
};

const LabelItem: FC<LabelItemProps> = ({
  title,
  inputType,
  inputPlaceholder,
}) => {
  return (
    <label className={"labelContent"}>
      <span className={"labelTitle"}>{title}</span>
      <Input type={inputType} placeholder={inputPlaceholder} />
    </label>
  );
};

export default LabelItem;
