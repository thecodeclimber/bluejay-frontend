import React from "react";
import Payment from "../payment";
import classnames from "classnames";
import { AiOutlineShoppingCart as ShoppingCartIcon } from "react-icons/ai";

const Order = () => {
  const orders = [
    {
      image: "/img/bolt-order-img.png",
      productName: "Carriage Bolts 1/4-20 UNC Steel Zinc",
      price: "$5.64",
    },
    {
      image: "/img/bolt-order-img.png",
      productName: "Carriage Bolts 1/4-20 UNC Steel Zinc",
      price: "$5.64",
    },
    {
      image: "/img/bolt-order-img.png",
      productName: "Carriage Bolts 1/4-20 UNC Steel Zinc",
      price: "$5.64",
    },
  ];

  return (
    <div className="flex font-ubuntu bg-white text-dark rounded-b-lg border-t border-dark border-opacity-10 px-4">
      <div className="border-r border-dark border-opacity-10 pr-6 w-full">
        {orders.map((order, index) => {
          const { image, productName, price } = order || {};
          return (
            <div
              key={index}
              className=""
              className={classnames(
                "flex justify-between items-center pt-6 py-6",
                {
                  "border-b border-dark border-opacity-10":
                    index !== orders.length - 1,
                }
              )}
            >
              <div className="flex items-center">
                <img src={image} width="90px" height="90px" />
                <div className="pl-6">
                  <div className="whitespace-pre text-lg pb-2">
                    {productName}
                  </div>
                  <div className="text-primary text-xl">{price}</div>
                </div>
              </div>
              <div className="border items-center flex rounded-lg px-6 py-3 border-primary text-primary text-base whitespace-pre ml-56">
                {" "}
                <ShoppingCartIcon className="text-lg mr-4" /> Buy it again
              </div>
            </div>
          );
        })}
      </div>
      <Payment />
    </div>
  );
};

export default Order;
