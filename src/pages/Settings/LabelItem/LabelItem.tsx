import React, { FC } from "react";
import Input from "../../../components/Input";
import "./LabelItem.scss";
import { LabelItemProps } from "../../../common/types";

const LabelItem: FC<LabelItemProps> = ({
  title,
  inputType,
  inputPlaceholder,
  inputName,
  inputValue,
  inputClassName,
  inputReadonly,
  onBlur,
  onChange,
}) => {
  return (
    <label className={"labelContent"}>
      <span className={"labelTitle"}>{title}</span>
      <Input
        className={inputClassName}
        readonly={inputReadonly}
        type={inputType}
        name={inputName}
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
  );
};

export default LabelItem;
