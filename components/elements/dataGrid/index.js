import React from "react";
import { func, bool, element } from "prop-types";
import classnames from "classnames";
import { TiTick as CheckedIcon } from "react-icons/ti";
import { BiChevronDown as DownIcon } from "react-icons/bi";
import { STATUS } from "../../../utils/constants";

const isSelectable = true;
const DataGrid = (props) => {
  const { gridData } = props || {};
  const { columnsName, rowData, isViewButton, isDeleteButton } = gridData || {};
  const isMoreButtons = isViewButton || isDeleteButton;
  return (
    <div>
      <table width="100%">
        <thead>
          <tr>
            {isSelectable && (
              <th className="bg-dark text-white rounded-tl py-6 text-left px-4">
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
                        "rounded-tr":
                          index === columnsName.length - 1 && !isMoreButtons,
                        "rounded-tl pl-10": !isSelectable && index === 0,
                      }
                    )}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{columnName}</span>
                      <span>
                        <DownIcon className="text-xl" />
                      </span>
                    </div>
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
            {isMoreButtons && (
              <th
                className={classnames(
                  "bg-dark text-white text-lg rounded-tr py-6 text-left",
                  {
                    "rounded-tl": !isMoreButtons,
                  }
                )}
              ></th>
            )}
          </tr>
        </thead>
        <tbody>
          {rowData &&
            rowData.length > 0 &&
            rowData.map((data, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {isSelectable && (
                    <td
                      className={classnames("text-left", {
                        "bg-dark bg-opacity-03": rowIndex % 2 === 0,
                      })}
                    >
                      <div className="flex justify-center">
                        <div
                          className={classnames(
                            "border border-dark rounded border-opacity-10 inline-grid bg-white",
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
                  {data?.columnsData &&
                    data.columnsData.length > 0 &&
                    data.columnsData.map((columnData, index) => {
                      return (
                        <td
                          key={index}
                          className={classnames("py-5", {
                            "pl-10": !isSelectable && index === 0,
                            "bg-dark bg-opacity-03": rowIndex % 2 === 0,
                          })}
                        >
                          <span className="text-base">{columnData.name}</span>
                          {columnData.status && (
                            <>
                              {columnData.status.toLowerCase() ===
                                STATUS.PENDING.toLowerCase() && (
                                <span className="bg-warning text-white py-2 px-6 rounded-xl text-sm font-medium">
                                  {columnData.status}
                                </span>
                              )}
                            </>
                          )}
                        </td>
                      );
                    })}
                  {isMoreButtons && (
                    <td
                      className={classnames("py-5", {
                        "bg-dark bg-opacity-03": rowIndex % 2 === 0,
                      })}
                    >
                      <div className="flex">
                        {isViewButton && (
                          <span className="text-sm border border-primary py-1 px-6 text-primary font-medium rounded mr-4">
                            View
                          </span>
                        )}
                        {isDeleteButton && (
                          <div className="border border-dark border-opacity-15 rounded py-1 px-4">
                            <img
                              src="/img/delete-invoice-icon.svg"
                              alt="delete-icon"
                              width="18"
                            />
                          </div>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

DataGrid.defaultProps = {};

DataGrid.propTypes = {};

export default DataGrid;
