import React, { useState } from "react";
import "./PageWrapper.scss";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

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
