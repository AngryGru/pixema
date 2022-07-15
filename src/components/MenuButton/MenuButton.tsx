import React, { useState } from "react";
import "./MenuButton.scss";
import Menu from "./Menu/Menu";
import NavLinks from "../Sidebar/NavLinks";

const MenuButton = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <div className={`menuContainer`}>
      <div className={`menuBtnContainer`} onClick={() => setMenuActive(true)}>
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

      {/* <Menu active={isMenuActive} setActive={setMenuActive}>
        <NavLinks />
        <button
          className="logoutCancelBtn"
          onClick={() => setMenuActive(false)}
        >
          Cancel
        </button>
      </Menu> */}
    </div>
  );
};

export default MenuButton;
