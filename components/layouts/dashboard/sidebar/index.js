import React from "react";
import classname from "classnames";

const Sidebar = () => {
  const sidebarList = [
    {
      icon: "/img/user-icon.svg",
      name: "My Profile",
      link: "",
    },
    {
      icon: "/img/user-cart-icon.svg",
      name: "My Orders",
      link: "",
    },
    {
      icon: "/img/invoice-icon.svg",
      name: "Invoices",
      link: "",
    },
    {
      icon: "/img/wishlist-icon.svg",
      name: "Wish List",
      link: "",
    },
    {
      icon: "/img/order-icon.svg",
      name: "Order History",
      link: "",
    },
    {
      icon: "/img/setting-icon.svg",
      name: "Account Details",
      link: "",
    },
    {
      icon: "/img/logout-icon.svg",
      name: "Logout",
      link: "",
    },
  ];

  return (
    <div className="max-w-220 flex flex-col bg-dark">
      <div>
        <div className="flex px-4 py-5 items-center">
          <img src="/img/dashboard-logo.png" className="mr-4" />
          <div className="font-ubuntu font-medium text-white text-lg leading-21">
            Blue-Jay Fasteners
          </div>
        </div>
        <hr className="mb-5 opacity-07 bg-white h-px" />
      </div>
      {sidebarList && sidebarList.length > 0 && (
        <div className="flex flex-col justify-between">
          <div>
            {sidebarList.map((data, index) => {
              if (index === sidebarList.length - 1) return;
              return (
                <div
                  className={classname(
                    "flex items-center font-ubuntu px-4 py-5 font-medium text-white bg-dark hover:bg-primary cursor-pointer text-sm tracking-tight",
                    {
                      "bg-primary": index === 0,
                    }
                  )}
                  key={index}
                >
                  <div className="ml-1 mr-4">
                    <img src={data.icon} alt={`img-${index}`} />
                  </div>
                  <div>{data.name}</div>
                </div>
              );
            })}
          </div>
          <div className="fixed bottom-0">
            <div className="flex items-center font-ubuntu pl-4 py-5 font-medium text-white bg-dark hover:bg-error cursor-pointer text-sm tracking-tight">
              <div className="ml-1 mr-4">
                <img
                  src={sidebarList[sidebarList.length - 1].icon}
                  alt={`img-${sidebarList.length - 1}`}
                />
              </div>
              <div>{sidebarList[sidebarList.length - 1].name}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
