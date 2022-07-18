import React, { FC } from "react";
import "./ButtonGroup.scss";
import SaveIcon from "../../assets/icons/SaveIcon";
import SendIcon from "../../assets/icons/SendIcon";

type ButtonGroupProps = {
  onSaveClick?: (e: any) => void;
  onSendClick?: () => void;
};

const ButtonGroup: FC<ButtonGroupProps> = ({ onSaveClick, onSendClick }) => {
  return (
    <div className="btnGroupContainer">
      <button id="saveBtn" className="groupBtn" onClick={onSaveClick}>
        <SaveIcon />
      </button>
      <button id="sendBtn" className="groupBtn" onClick={() => onSendClick}>
        <SendIcon />
      </button>
    </div>
  );
};

export default ButtonGroup;
