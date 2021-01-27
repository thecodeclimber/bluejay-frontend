import React from "react";
import { BsArrowRight as RightArrow } from "react-icons/bs";
import classnames from "classnames";

const MyOrders = () => {
  const data = {};
  data.orders = [
    {
      name: "№ 339240",
      date: "19.02.2020 04:20",
      quantity: 24,
      price: "697.00",
    },
    {
      name: "№ 339240",
      date: "19.02.2020 04:20",
      quantity: 24,
      price: "697.00",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white rounded-lg py-6 tracking-tight mr-10">
      <div className="flex items-center justify-between w-full px-8 pb-6">
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
              className="flex justify-between items-center w-full px-8"
              key={index}
            >
              <div className="flex flex-col text-lg text-dark font-medium">
                <span className="flex items-center">
                  {item.name}
                  <span className="bg-green text-xs flex items-center font-normal text-white rounded-2xl h-full px-3 h-5 ml-4">
                    shipped
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
