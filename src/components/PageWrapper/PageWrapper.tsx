import React from "react";
import "./PageWrapper.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

const PageWrapper = () => {
  return (
    <div className={"pageContainer"}>
      <Header />
      <div className={"pageContent"}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default PageWrapper;
