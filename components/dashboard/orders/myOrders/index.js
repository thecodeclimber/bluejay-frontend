import React, { Fragment } from "react";
import classnames from "classnames";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon1,
} from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
import { IoMdArrowDropdown as DownIcon2 } from "react-icons/io";
import { MdSearch as SearchIcon } from "react-icons/md";

const MyOrders = () => {
  const orders = [
    {
      orderID: "№ 339240903",
      date: "19.02.2020 04:20",
      image1: "/img/order-img1.png",
      image2: "/img/order-img.png",
      status: "shipped",
      quantity: "24",
      price: "697.00",
    },
    {
      orderID: "№ 339240903",
      date: "19.02.2020 04:20",
      image1: "/img/order-img1.png",
      image2: "/img/order-img.png",
      status: "shipped",
      quantity: "24",
      price: "697.00",
    },
    {
      orderID: "№ 339240903",
      date: "19.02.2020 04:20",
      image1: "/img/order-img1.png",
      image2: "/img/order-img.png",
      status: "Arrived",
      quantity: "24",
      price: "697.00",
    },
  ];
  const history = [
    {
      date: "April 9, 2020",
      time: "20:27",
    },
    {
      date: "April 5, 2020",
      time: "20:27",
    },
    {
      date: "April 3, 2020",
      time: "20:27",
    },
    {
      date: "April 1, 2020",
      time: "20:27",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center pt-8 mb-8">
        <div className="relative w-6/12 flex flex-grow rounded-lg shadow-grey-8">
          <input
            id="company_website"
            className="flex-1 block p-5 rounded-lg focus:outline-none form-input sm:text-base sm:leading-5 overflow-hidden"
            placeholder="Search all orders"
            autoComplete="off"
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-4 border-l border-solid pointer-events-none border-dark border-opacity-05">
            <SearchIcon className="text-xl text-primary" />
          </div>
        </div>
        <div className="flex items-center justify-end w-4/12">
          <div className="font-normal text-lg text-dark pr-6">
            7 orders <span className="font-light">placed in</span>
          </div>
          <div className="flex items-center font-medium text-base text-dark py-4 px-6 bg-white rounded-lg shadow-grey-8">
            2020
            <span>
              <DownIcon2 className="ml-6" />
            </span>
          </div>
        </div>
      </div>
      {orders.length > 0 &&
        orders.map((order, index) => (
          <div
            key={index}
            className="flex justify-between py-4 items-center bg-white rounded-lg shadow-grey-8 mb-6"
          >
            <div className="flex items-center">
              <DownIcon1 className="mx-6" />
              <div className="text-dark font-medium mr-6">{order.orderID}</div>
              <div className="text-dark font-light mr-6">{order.date}</div>
              <img className="mr-2" src={order.image1} />
              <img src={order.image2} />
            </div>
            <div className="flex items-center">
              <div className="flex">
                <span className="text-dark font-light text-base pb-1">
                  {order.quantity} items at{" "}
                  <span className="text-dark font-medium text-lg">
                    ${order.price}
                  </span>
                </span>
              </div>
              <div
                className={classnames(
                  "text-xs flex items-center font-normal text-white rounded-2xl h-full px-4 py-1 h-5 mx-6",
                  {
                    "bg-primary": index !== orders.length - 1,
                    "bg-success": index === orders.length - 1,
                  }
                )}
              >
                {order.status}
              </div>

              <Menu className="relative">
                {({ open }) => (
                  <>
                    <Menu.Button
                      as="div"
                      className="flex items-center cursor-pointer focus:outline-none"
                    >
                      <div className="text-dark font-medium border-l cursor-pointer border-dark border-opacity-10 pl-6">
                        History
                      </div>
                      <DownIcon1 className="mx-6" />
                    </Menu.Button>

                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                      className="absolute z-40 right-0"
                    >
                      <Menu.Items
                        className="absolute font-ubuntu bg-white outline-none px-6 py-4 right-0 top-4 mt-56 mr-16 text-dark rounded relative shadow-grey-8"
                        static
                      >
                        {history.length > 0 &&
                          history.map((data, index) => (
                            <Fragment key={index}>
                              <Menu.Item
                                as="div"
                                className="flex flex-col justify-between text-dark focus:outline-none"
                              >
                                <div>{data.date}</div>
                                <div className="text-xs font-light mr-3 opacity-75">
                                  {data.time}
                                </div>
                              </Menu.Item>
                              {index !== history.length - 1 && (
                                <hr className="opacity-05 my-3" />
                              )}
                            </Fragment>
                          ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyOrders;
