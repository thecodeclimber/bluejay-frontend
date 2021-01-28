import React from "react";
import classnames from "classnames";
import { BsArrowRight as RightArrow } from "react-icons/bs";

const MyOrders = () => {
  const data = {};
  data.orders = [
    {
      name: "№ 339240",
      date: "19.02.2020 04:20",
      quantity: 24,
      price: "697.00",
      status: "Shipped",
    },
    {
      name: "№ 339240",
      date: "19.02.2020 04:20",
      quantity: 24,
      price: "697.00",
      status: "Arrived",
    },
  ];

  return (
    <div className="max-w-830 flex flex-col w-full bg-white rounded-lg p-6 shadow-grey-8 tracking-tight mr-10">
      <div className="flex items-center justify-between w-full pb-6">
        <div className="text-dark text-2xl font-light whitespace-pre">
          My
          <span className="font-medium"> Orders</span>
        </div>
        <div className="flex items-center text-primary">
          All orders
          <span className="ml-4">
            <RightArrow className="text-xl" />
          </span>
        </div>
      </div>

      {data &&
        data.orders.length > 0 &&
        data.orders.map((item, index) => (
          <>
            <div
              className="flex justify-between items-center w-full"
              key={index}
            >
              <div className="flex flex-col text-lg text-dark font-medium">
                <span className="flex items-center">
                  {item.name}
                  <span
                    className={classnames(
                      "text-xs flex items-center font-normal text-white rounded-2xl h-full px-3 h-5 ml-4",
                      {
                        "bg-primary": index === data.orders.length % 2,
                        "bg-success": index !== data.orders.length % 2,
                      }
                    )}
                  >
                    {item.status}
                  </span>
                </span>
                <span className="text-sm text-dark font-light opacity-90 pt-1">
                  {item.date}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-dark font-light text-base pb-1">
                  {item.quantity} items at{" "}
                  <span className="text-dark font-medium text-lg">
                    ${item.price}
                  </span>
                </span>
                <span className="flex items-center justify-end text-sm text-primary">
                  Learn more <RightArrow className="ml-2" />
                </span>
              </div>
            </div>
            <hr
              className={classnames("opacity-07 bg-dark my-4 mx-8", {
                hidden: index === data.orders.length - 1,
              })}
            />
          </>
        ))}
    </div>
  );
};

export default MyOrders;
