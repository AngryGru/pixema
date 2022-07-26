import React from "react";
import "./NavLinks.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "../../../assets/icons/HomeIcon";
import TrendsIcon from "../../../assets/icons/TrendsIcon";
import FavoritesIcon from "../../../assets/icons/FavoritesIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import { NavLink } from "react-router-dom";
import {
  MovieSelector,
  setActiveTab,
  setCurrentPage,
  setMoreMovies,
  setMovieList,
} from "../../../redux/reducers/movieReducer";

const NavLinks = () => {
  const activeTab = useSelector(MovieSelector.getActiveTab);
  const dispatch = useDispatch();
  const onTabClick = (tab: string) => {
    dispatch(setActiveTab(tab));
    dispatch(setCurrentPage(1));
    dispatch(setMoreMovies([]));
    dispatch(setMovieList([]));
  };

  return (
    <div className={"linksContainer"}>
      <NavLink
        className={classNames("menuItem", {
          ["activeTab"]: activeTab === "home",
        })}
        to={"/home"}
        onClick={() => onTabClick("home")}
      >
        <HomeIcon />
        Home
      </NavLink>
      <NavLink
        className={classNames("menuItem", {
          ["activeTab"]: activeTab === "trends",
        })}
        to={"/trends"}
        onClick={() => onTabClick("trends")}
      >
        <TrendsIcon />
        Trends
      </NavLink>
      <NavLink
        className={classNames("menuItem", {
          ["activeTab"]: activeTab === "favorites",
        })}
        to={"/favorites"}
        onClick={() => onTabClick("favorites")}
      >
        <FavoritesIcon />
        Favorites
      </NavLink>
      <NavLink
        className={classNames("menuItem", {
          ["activeTab"]: activeTab === "settings",
        })}
        to={"/settings"}
        onClick={() => onTabClick("settings")}
      >
        <SettingsIcon />
        Settings
      </NavLink>
    </div>
  );
};

export default NavLinks;
