import React from "react";
import DataGrid from "../../../elements/dataGrid";
import { STATUS } from "../../../../utils/constants";

const columnsData = [
  { name: "98804008" },
  { name: "Pineapple Inc" },
  { name: "ReDQ Inc" },
  { name: "$14630.00" },
  { status: STATUS.PENDING },
];

const Reports = () => {
  const gridData = {
    columnsName: ["Number #", "BillForm", "Bill TO", "Total Cost", "Status"],
    rowData: [
      {
        id: 1,
        columnsData,
      },
      {
        id: 2,
        columnsData,
      },
      {
        id: 3,
        columnsData,
      },
      {
        id: 4,
        columnsData,
      },
    ],
    isViewButton: true,
    isDeleteButton: true,
  };

  return (
    <div className="bg-white p-8 shadow-grey-8 rounded">
      <div className="font-medium text-xl text-dark mb-6">Your Reports</div>
      <hr className="opacity-10 bg-dark" />
      <div className="mt-8">
        <DataGrid gridData={gridData} />
      </div>
    </div>
  );
};

export default Reports;
