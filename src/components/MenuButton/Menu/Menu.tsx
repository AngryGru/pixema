import React, { FC } from "react";
import "./Menu.scss";
import classNames from "classnames";
import { Theme } from "../../../common/types";
import { useThemeContext } from "../../../context/themeModeContext";

type MenuProps = {
  active: boolean;
  setActive: (acitve: boolean) => void;
  children: any;
};

const Menu: FC<MenuProps> = ({ active, setActive, children }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      // className={active ? "menu activeMenu" : "menu"}
      className={classNames("menu", {
        ["menu activeMenu"]: active,
        ["menuLight"]: !isDarkTheme,
      })}
      onClick={() => setActive(false)}
    >
      <div className={"menuContent"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Menu;
