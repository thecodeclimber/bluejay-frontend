import React from "react";
import Sidebar from "./sidebar";
import Base from "../base";
import Navbar from "./navbar";

const DashboardLayout = (props) => {
  const { children } = props;
  return (
    <Base>
      <div className="relative flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </Base>
  );
};

export default DashboardLayout;
