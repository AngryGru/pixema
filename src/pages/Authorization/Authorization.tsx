import React from "react";
import "./Authorization.scss";
import Logo from "../../components/Logo";
import { Outlet } from "react-router-dom";

const Authorization = () => {
  return (
    <div className="authContainer">
      <div className="authContainerLogo">
        <Logo />
      </div>
      <Outlet />
      <div className={"allRightsText"}>
        <p>© All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Authorization;
