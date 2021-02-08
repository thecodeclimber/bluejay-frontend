import React from "react";
import { func, bool, element } from "prop-types";
import classnames from "classnames";
import { TiTick as CheckedIcon } from "react-icons/ti";

const columnsName = ["Number #", "BillForm", "Bill TO"];
const columnsData = [
  { data: "98804008", sort: true },
  { data: "Pineapple Inc", sort: true },
  { data: "ReDQ Inc", sort: true },
];
const isSelectable = true;
const DataGrid = (props) => {
  return (
    <div>
      <table width="100%">
        <thead>
          <tr>
            {isSelectable && (
              <th className="bg-dark text-white rounded-tl py-6 text-left">
                <div className="flex justify-center">
                  <div
                    className={classnames(
                      "border border-dark rounded border-opacity-10 bg-white inline-grid",
                      {
                        "bg-dark": false,
                      }
                    )}
                  >
                    <CheckedIcon className="text-white text-xl" />
                  </div>
                </div>
              </th>
            )}
            {columnsName.length > 0 &&
              columnsName.map((columnName, index) => {
                return (
                  <th
                    key={index}
                    className={classnames(
                      "bg-dark text-white text-lg py-6 text-left",
                      {
                        "rounded-tr": index === columnsName.length - 1,
                        "rounded-tl pl-10": !isSelectable && index === 0,
                      }
                    )}
                  >
                    {columnName}
                  </th>
                );
              })}
            {columnsName.length === 0 && (
              <th
                className={classnames(
                  "bg-dark text-white text-lg rounded-tr py-6 text-left",
                  {
                    "rounded-tl": !isSelectable,
                  }
                )}
              ></th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            {isSelectable && (
              <td className="text-left">
                <div className="flex justify-center">
                  <div
                    className={classnames(
                      "border border-dark rounded border-opacity-10 inline-grid",
                      {
                        "bg-dark": false,
                      }
                    )}
                  >
                    <CheckedIcon className="text-white text-xl" />
                  </div>
                </div>
              </td>
            )}
            {columnsData.length > 0 &&
              columnsData.map((columnData, index) => {
                return (
                  <td
                    key={index}
                    className={classnames("", {
                      "pl-10": !isSelectable && index === 0,
                    })}
                  >
                    {columnData.data}
                  </td>
                );
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DataGrid.defaultProps = {};

DataGrid.propTypes = {};

export default DataGrid;
