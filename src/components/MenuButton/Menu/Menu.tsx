import React, { FC, useState } from "react";
import "./Menu.scss";
import NavLinks from "../../Sidebar/NavLinks";
import { NavLink } from "react-router-dom";

type MenuProps = {
  active: boolean;
  setActive: (acitve: boolean) => void;
  children: any;
};

const Menu: FC<MenuProps> = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className={"menuContent"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Menu;
