import React from "react";
import headerStyles from "./Header.module.scss";
import Search from "../Search";
import User from "../User";
import Logo from "../Logo";
import MenuButton from "../MenuButton";

const Header = () => {
  return (
    <div className={headerStyles.headerContainer}>
      <Logo className={headerStyles.logo} />
      <Search />
      <div className={headerStyles.menuBtn}>
        <MenuButton />
      </div>
      <User />
    </div>
  );
};

export default Header;
