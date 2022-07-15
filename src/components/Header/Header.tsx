import React, { useState } from "react";
import "./Header.scss";
import Search from "../Search";
import User from "../User";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import Menu from "../MenuButton/Menu";

const Header = () => {
  return (
    <div className={"headerContainer"}>
      <Logo className={"logo"} />
      <Search />
      <div className={"menuContainer"}>
        <div className={"menuBtn"}>
          <MenuButton />
        </div>
        <User />
      </div>
    </div>
  );
};

export default Header;
