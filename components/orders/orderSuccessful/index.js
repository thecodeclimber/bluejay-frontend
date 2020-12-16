import React from "react";
import classnames from "classnames";
import { FaCheck as CheckIcon } from "react-icons/fa";
import { FiPrinter as PrinterIcon } from "react-icons/fi";
import { HiArrowNarrowLeft as ArrowLeftIcon } from "react-icons/hi";

const OrderSuccessful = () => {
  const data = {};
  data.boltList = [
    {
      img: "/src/img1.svg",
      boltName: "Carriage Bolts 1/4-20 UNC Steel Zinc",
      boltPrice: "$5.64",
    },
    {
      img: "/src/img1.svg",
      boltName: "Carriage Bolts 1/4-20 UNC Steel Zinc",
      boltPrice: "$5.64",
    },
    {
      img: "/src/img1.svg",
      boltName: "Carriage Bolts 1/4-20 UNC Steel Zinc",
      boltPrice: "$5.64",
    },
  ];
  data.message =
    "Thanks for your order. In the near future we will send you an SMS with \n a zak number and an estimated delivery date.";
  return (
    <div className="font-ubuntu">
      <div className="bg-primary flex py-6 items-center ">
        <div className="container mx-auto flex text-white items-center justify-between font-ubuntu">
          <div className="text-3xl">
            <div className="flex items-center my-2 text-white text-3xl font-normal">
              <CheckIcon className="text-2xl mr-6" />
              <span className="text-3xl">Order Successfully Submitted</span>
            </div>
            <div className="text-xl ml-12 pl-3 my-2 text-white font-light opacity-75">
              Thank you. Your order has been accepted.
            </div>
          </div>
          <div className="block lg:flex items-center justify-end">
            <div>
              <button className="inline-flex text-lg py-4 px-6 mb-6 lg:mb-0 font-normal whitespace-pre items-center border mx-8 text-white  border-white rounded border-opacity-10 focus:outline-none ">
                <PrinterIcon className="text-2lg mr-6 " />
                Print order
              </button>
            </div>
            <div>
              <button className="inline-flex font-normal py-4 px-6 text-lg whitespace-pre items-center items-center border text-white border-white rounded border-opacity-10 focus:outline-none ">
                <ArrowLeftIcon className="text-2lg mr-6" />
                Return to main page
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto m-8">
        <div className="container font-medium text-2xl mb-2">
          Payment upon receipt
        </div>
        <div className="container font-light opacity-75 text-xl text-dark">
          Order number #374156239
        </div>
      </div>
      <div className="container mx-auto flex border justify-between  rounded border-dark border-opacity-10">
        <div className="w-full m-6">
          {data.boltList.map((bolt, index) => (
            <div key={index}>
              <div className="flex items-center ">
                <img className="mr-6" src="/img/img1.svg" />
                <div className="text-lg  font-normal text-dark">
                  {bolt.boltName}
                  <div className="text-primary py-1 font-medium text-xl text-lg">
                    {bolt.boltPrice}
                  </div>
                </div>
              </div>
              <hr
                className={classnames("opacity-10 my-6 bg-dark", {
                  hidden: index === data.boltList.length - 1,
                })}
              />
            </div>
          ))}
        </div>
        <div className="max-w-250 w-full flex flex-col justify-between border-l border-dark border-opacity-10">
          <div>
            <div className="p-5 items-center ">
              <div className="text-base font-medium text-black">
                Payment: <span className="font-normal text-black ">Cash</span>
              </div>
              <div className="font-light text-sm text-dark opacity-75">
                FedEx express shipping post
              </div>
            </div>
            <hr className=" opacity-05 mx-6 bg-dark" />
            <div className="p-5">
              <div className="text-base font-medium text-black">
                Delivery:{" "}
                <span className="font-normal text-black">Express Delivery</span>
              </div>
              <div className="font-light text-sm text-dark opacity-70">
                FedEx express shipping post
              </div>
            </div>
          </div>
          <div className="p-5">
            <hr className=" opacity-05 bg-dark mb-5" />
            <div className="flex justify-between pb-3">
              <div className="font-light text-base text-dark opacity-70">
                Subtotal
              </div>
              <div className="font-medium text-dark opacity-90">$33.00</div>
            </div>
            <div className="flex justify-between  pb-3">
              <div className="font-light text-dark opacity-70">Shipping</div>
              <div className="font-medium text-dark opacity-90">$6.24</div>
            </div>
            <div className="flex justify-between  pt-4">
              <div className="text-xl font-light text-dark">Total</div>
              <div className="text-xl font-medium text-dark">$108.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto font-light text-dark whitespace-pre-line text-xl opacity-75 text-center w-full py-16">
        {data.message}
      </div>
    </div>
  );
};

export default OrderSuccessful;
