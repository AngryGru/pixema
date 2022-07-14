import React from "react";
import "./ButtonGroup.scss";
import SaveIcon from "../../assets/icons/SaveIcon";
import SendIcon from "../../assets/icons/SendIcon";

const ButtonGroup = () => {
  return (
    <div className="btnGroupContainer">
      <button id="saveBtn" className="groupBtn">
        <SaveIcon />
      </button>
      <button id="sendBtn" className="groupBtn">
        <SendIcon />
      </button>
    </div>
  );
};

export default ButtonGroup;
