import React, { useState } from "react";
import "./Header.scss";
import Search from "../Search";
import User from "../User";
import Logo from "../Logo";
import MenuButton from "../MenuButton";

const Header = () => {
  return (
    <div className={"headerContainer"}>
      <Logo className={"logo"} />
      <Search />
      <div className={"menuContainer"}>
        <div className={"menuBtn"}>
          <MenuButton />
        </div>
      </div>
      <User />
    </div>
  );
};

export default Header;
