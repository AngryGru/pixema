import React, { useState } from "react";
import "./Header.scss";
import Search from "../Search";
import User from "../User";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import Menu from "../MenuButton/Menu";
import NavLinks from "../Sidebar/NavLinks";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const onMenuClick = () => {
    setMenuActive(true);
  };

  return (
    <div className={"headerContainer"}>
      <Logo className={"logo"} />
      <Search />
      <div className={"menuContainer"}>
        <div className={"menuBtn"}>
          <MenuButton onClick={() => onMenuClick()} />
        </div>
        <User />
      </div>
      <Menu active={isMenuActive} setActive={setMenuActive}>
        <div className="menuClose" onClick={() => setMenuActive(false)}>
          <AiOutlineClose />
        </div>
        <NavLinks />
      </Menu>
    </div>
  );
};

export default Header;
