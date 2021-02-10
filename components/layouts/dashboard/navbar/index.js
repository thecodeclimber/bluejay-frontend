import React, { Fragment } from "react";
import classname from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { BsArrowRight as RightArrow } from "react-icons/bs";
import { HiOutlineBell as BellIcon } from "react-icons/hi";

const Navbar = () => {
  const notificationData = [
    {
      type: "Operation successful",
      time: "20:17",
      status: "Your operation was successful",
    },
    {
      type: "Order cancelled",
      time: "17:33",
      status: "Your order has been canceled",
    },
  ];

  return (
    <>
      <div className="flex relative shadow-grey-8 items-center justify-between py-6 px-12 w-full tracking-tight ">
        <div className="flex items-center">
          <div className="text-3xl font-light text-dark mr-10">
            My <span className="font-medium">Profile</span>
          </div>
          <button className="flex items-center text-base font-normal whitespace-pre py-3 px-5 text-dark border border-dark rounded-3xl border-opacity-10 focus:outline-none">
            Go to marketplace
            <RightArrow className="text-xl ml-4" />
          </button>
        </div>
        <div className="flex">
          <img
            className="mr-6"
            src="/img/avatar-image2.svg"
            alt="avatar_image"
          />
          <div className="flex flex-col font-light opacity-75 mr-8">
            <span className="text-left text-sm">welcome</span>
            <span className="text-lg font-medium">Andrey Babak</span>
          </div>
          <Menu className="relative">
            {({ open }) => (
              <>
                <Menu.Button as="div" className="focus:outline-none">
                  <div
                    className={classname(
                      "flex relative items-center border cursor-pointer border-dark rounded-full border-opacity-10 hover:bg-light hover:bg-opacity-50 p-3"
                    )}
                  >
                    <div className="absolute rounded-full p-1 bg-error right-10 top-10"></div>
                    <BellIcon className="text-dark text-xl" />
                  </div>
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
                    className="font-ubuntu bg-white outline-none px-6 py-4 mt-16 right-0 mr-12 text-dark rounded relative shadow-grey-8"
                    static
                  >
                    {notificationData.map((data, index) => {
                      return (
                        <Fragment key={index}>
                          <Menu.Item
                            as="div"
                            className="flex flex-col justify-between text-dark focus:outline-none"
                          >
                            <div
                              className={classname("text-xs font-medium mb-3", {
                                "text-success":
                                  index === notificationData.length % 2,
                                "text-error":
                                  index !== notificationData.length % 2,
                              })}
                            >
                              {data.type}
                            </div>
                            <div className="flex">
                              <div className="text-xs font-light mr-3 opacity-75">
                                {data.time}
                              </div>
                              <div className="text-xs font-light">
                                {data.status}
                              </div>
                            </div>
                          </Menu.Item>
                          {index !== notificationData.length - 1 && (
                            <hr className="opacity-05 my-3" />
                          )}
                        </Fragment>
                      );
                    })}
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
