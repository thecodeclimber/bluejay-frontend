import React from "react";

const Shipping = () => {
  return (
    <div className="border border-dark border-opacity-10 rounded py-5 px-6 tracking-tight font-ubuntu">
      <div className="text-xl font-light mb-4 text-black">Shipping</div>
      <div className="flex items-center justify-between border border-dark border-opacity-10 rounded px-6 py-3 mb-5">
        <div className="text-black">
          <div className="text-base font-medium mb-1 leading-tight">
            In-Store Pick Up
          </div>
          <div className="text-sm font-light opacity-75">
            FedEx express shipping post
          </div>
        </div>
        <div className="text-lg font-medium text-green">FREE</div>
      </div>
      <div className="bg-dark flex items-center justify-between border border-dark border-opacity-10 rounded px-6 py-3 mb-5">
        <div className="text-white">
          <div className="text-base font-medium mb-1 leading-tight">
            Ship to Home
          </div>
          <div className="text-sm font-light opacity-75">
            FedEx express shipping post
          </div>
        </div>
        <div className="text-lg font-medium text-white">$6.24</div>
      </div>
      <div className="flex items-center justify-between border border-dark border-opacity-10 rounded px-6 py-3">
        <div className="text-black">
          <div className="text-base font-medium mb-1 leading-tight">
            Express Delivery
          </div>
          <div className="text-sm font-light opacity-75">
            FedEx express shipping post
          </div>
        </div>
        <div className="text-lg font-medium text-black">$14.98</div>
      </div>
    </div>
  );
};

export default Shipping;
