import React from "react";
import sidebarStyles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/icons/HomeIcon";
import TrendsIcon from "../../assets/icons/TrendsIcon";
import FavoritesIcon from "../../assets/icons/FavoritesIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import Logo from "../Logo";

const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebarContainer}>
      <div className={sidebarStyles.sidebarContent}>
        <Logo className={sidebarStyles.logo} />
        <div className={sidebarStyles.linksContainer}>
          <a className={sidebarStyles.menuItem}>
            <HomeIcon />
            Home
          </a>
          <a className={sidebarStyles.menuItem}>
            <TrendsIcon />
            Trends
          </a>
          <a className={sidebarStyles.menuItem}>
            <FavoritesIcon />
            Favorites
          </a>
          <a className={sidebarStyles.menuItem}>
            <SettingsIcon />
            Settings
          </a>
        </div>
      </div>
      <div className={sidebarStyles.sidebarText}>© All Rights Reserved</div>
    </div>
  );
};

export default Sidebar;
