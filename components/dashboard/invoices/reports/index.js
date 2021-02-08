import React from "react";
import DataGrid from "../../../elements/dataGrid";

const Reports = () => {
  return (
    <div className="bg-white p-8 shadow-grey-8 rounded">
      <div className="font-medium text-xl text-dark mb-6">Your Reports</div>
      <hr className="opacity-10 bg-dark" />
      <div className="mt-8">
        <DataGrid />
      </div>
    </div>
  );
};

export default Reports;
