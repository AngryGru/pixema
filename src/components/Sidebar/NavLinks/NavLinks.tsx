import React from "react";
import "./NavLinks.scss";
import HomeIcon from "../../../assets/icons/HomeIcon";
import TrendsIcon from "../../../assets/icons/TrendsIcon";
import FavoritesIcon from "../../../assets/icons/FavoritesIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className={"linksContainer"}>
      <a className={"menuItem"}>
        <HomeIcon />
        Home
      </a>
      <a className={"menuItem"}>
        <TrendsIcon />
        Trends
      </a>
      <a className={"menuItem"}>
        <FavoritesIcon />
        Favorites
      </a>
      <NavLink className={"menuItem"} to={"/settings"}>
        <SettingsIcon />
        Settings
      </NavLink>
    </div>
  );
};

export default NavLinks;
