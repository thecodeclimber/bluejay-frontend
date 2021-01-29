import React from "react";
import MyOrders from "./myOrders";
import BreadCrum from "./breadCrum";

const Orders = () => {
  return (
    <div className="flex flex-col pt-8 px-12 bg-gray90 tracking-tight font-ubuntu h-full tracking-tight">
      <BreadCrum />
      <MyOrders />
    </div>
  );
};

export default Orders;
