import React from "react";
import "./Sidebar.scss";
import NavLinks from "../Sidebar/NavLinks";

const Sidebar = () => {
  return (
    <div className={"sidebarContainer"}>
      <NavLinks />
      <div className={"sidebarText"}>© All Rights Reserved</div>
    </div>
  );
};

export default Sidebar;
