import React from "react";
import "./Authorization.scss";
import Logo from "../../components/Logo";

const Authorization = ({ children }: any) => {
  return (
    <div className="authContainer">
      <div className="authContainerLogo">
        <Logo />
      </div>
      {children}
      <div className={"allRightsText"}>
        <p>© All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Authorization;
