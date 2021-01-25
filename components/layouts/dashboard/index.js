import React from "react";
import Sidebar from "./sidebar";
import Base from "../base";
import Navbar from "./navbar";

const DashboardLayout = (props) => {
  const { children } = props;
  return (
    <Base>
      <div className="flex h-full">
        <Sidebar />
        <div>
          <Navbar />
          {children}
        </div>
      </div>
    </Base>
  );
};

export default DashboardLayout;
