import React, { useState } from "react";
import "./MenuButton.scss";

const MenuButton = ({ onClick }: any) => {
  return (
    <div className={`menuContainer`}>
      <div className={`menuBtnContainer`} onClick={() => onClick()}>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L15 1M1 7H15M1 13H15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default MenuButton;
