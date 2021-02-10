import React, { useState, useEffect, Fragment } from "react";
import classnames from "classnames";
import {
  IoIosArrowUp as UpIcon,
  IoIosArrowDown as DownIcon1,
} from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
import { IoMdArrowDropdown as DownIcon2 } from "react-icons/io";
import { MdSearch as SearchIcon } from "react-icons/md";
import Order from "./order";

const MyOrders = () => {
  const ordersList = [
    {
      orderID: "№ 339240903",
      date: "19.02.2020 04:20",
      image1: "/img/order-img1.png",
      image2: "/img/order-img.png",
      status: "shipped",
      quantity: "24",
      price: "697.00",
      isExpanded: false,
    },
    {
      orderID: "№ 339240903",
      date: "19.02.2020 04:20",
      image1: "/img/order-img1.png",
      image2: "/img/order-img.png",
      status: "shipped",
      quantity: "24",
      price: "697.00",
      isExpanded: false,
    },
    {
      orderID: "№ 339240903",
      date: "19.02.2020 04:20",
      image1: "/img/order-img1.png",
      image2: "/img/order-img.png",
      status: "Arrived",
      quantity: "24",
      price: "697.00",
      isExpanded: false,
    },
    {
      orderID: "№ 339240903",
      date: "19.02.2020 04:20",
      image1: "/img/order-img1.png",
      image2: "/img/order-img.png",
      status: "Arrived",
      quantity: "24",
      price: "697.00",
      isExpanded: false,
    },
  ];
  const history = [
    {
      date: "April 9, 2020",
      shippingStatus: [
        {
          time: "20:27",
          status: "Done",
        },
      ]
    },
    {
      date: "April 5, 2020",
      shippingStatus: [
        {
          time: "20:17",
          status: "Located in the recipient city",
        },
      ]
    },
    {
      date: "April 3, 2020",
      shippingStatus: [
        {
          time: "15:07",
          status: "Goes to the recipient city",
        },
        {
          time: "11:24",
          status: "Located in the recipient city",
        },
      ]
    },
    {
      date: "April 1, 2020",
      shippingStatus: [
        {
          time: "17:33",
          status: "Processed automatically",
        },
        {
          time: "17:30",
          status: "New order",
        },
      ]
    },
  ];
  const [orders, setOrders] = useState(ordersList);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
  }, [toggleDropDown]);

  const handleDropDown = (index) => {
    if(!index && index != 0) return
    orders[index].isExpanded = !orders[index].isExpanded
    setOrders(orders)
    setToggleDropDown(!toggleDropDown)
  }

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
      <div>
        {orders.length > 0 &&
          orders.map((order, index) => (
            <>
              <div
                key={index}
                className= "pt-4 items-center bg-white rounded-lg shadow-grey-8 mt-6"
              >
                <div className="flex justify-between pb-4">
                  <div className="flex items-center">
                    {!order.isExpanded ? <DownIcon1 className="ml-6 mr-4" onClick={() => handleDropDown(index)} /> :
                      <UpIcon className="ml-6 mr-4 text-primary" onClick={() => handleDropDown(index)} />}
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
                        "text-base flex items-center font-normal text-white rounded-2xl px-8 py-5 h-5 mx-10",
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
                            <div className="text-dark text-lg font-medium border-l cursor-pointer border-dark border-opacity-10 pl-10">
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
                              {history && history.length > 0 &&
                                history?.map((data, index) => (
                                  <Fragment key={index}>
                                    <Menu.Item
                                      as="div"
                                      className="flex flex-col justify-between text-dark focus:outline-none text-xs"
                                    >
                                      <div
                                        className={classnames(
                                          "font-bolder",
                                          {
                                            "pt-3": index !== 0,
                                          }
                                        )}>{data.date}</div>
                                      {index !== history.length && (
                                        <hr className="opacity-05 my-2" />
                                      )}
                                      <div className="text-xs font-light mr-3 opacity-75">
                                        {data.shippingStatus?.map((shippingStatus, index) => {
                                          const { time, status } = shippingStatus || {}
                                          return (
                                            <div className="flex relative">
                                              {status === "Done" && <div className="absolute text-success -left-15">&#9679;</div>}
                                              {time}
                                              <div
                                                className={classnames(
                                                  "pl-16",
                                                  {
                                                    "font-bolder text-success": status === "Done",
                                                  }
                                                )}>{status}</div>
                                            </div>
                                          )
                                        })}
                                      </div>
                                    </Menu.Item>
                                  </Fragment>
                                ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
                {order.isExpanded && <Order />}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default MyOrders;
