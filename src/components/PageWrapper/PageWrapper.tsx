import React from "react";
import "./PageWrapper.scss";
import Header from "../Header";
import Sidebar from "../Sidebar";

const PageWrapper = ({ children }: any) => {
  return (
    <div className={"pageContainer"}>
      <Header />
      <div className={"pageContent"}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
