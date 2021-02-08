import React from "react";
import BreadCrum from "../breadCrum";
import Reports from "./reports";

const Invoices = () => {
  return (
    <div className="flex flex-col pt-8 px-12 bg-gray90 tracking-tight font-ubuntu h-full tracking-tight">
      <BreadCrum />
      <div className="pt-8">
        <Reports />
      </div>
    </div>
  );
};

export default Invoices;
