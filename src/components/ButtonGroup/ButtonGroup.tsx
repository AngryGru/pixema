import React, { FC } from "react";
import "./ButtonGroup.scss";
import classNames from "classnames";
import SaveIcon from "../../assets/icons/SaveIcon";
import SendIcon from "../../assets/icons/SendIcon";

type ButtonGroupProps = {
  saveBtnClassName?: string;
  isSaveBtnActive?: boolean;
  onSaveClick?: (e: any) => void;
  onSendClick?: () => void;
};

const ButtonGroup: FC<ButtonGroupProps> = ({
  saveBtnClassName,
  isSaveBtnActive,
  onSaveClick,
  onSendClick,
}) => {
  return (
    <div className="btnGroupContainer">
      <button
        id="saveBtn"
        className={classNames("groupBtn", saveBtnClassName)}
        onClick={onSaveClick}
      >
        <SaveIcon width={"24"} height={"24"} isActive={isSaveBtnActive} />
      </button>
      <button id="sendBtn" className="groupBtn" onClick={() => onSendClick}>
        <SendIcon />
      </button>
    </div>
  );
};

export default ButtonGroup;
