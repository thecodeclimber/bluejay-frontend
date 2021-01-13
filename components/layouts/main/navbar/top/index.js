import React, { Fragment, useState, useContext } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import {
  MdAccountCircle as UserIcon,
  MdArrowDropDown as ArrowIcon,
  MdChevronRight as ChevronRight,
  MdFavorite as FavoriteIcon,
  MdShoppingCart as Cart,
} from "react-icons/md";
import {
  BsCardList as ListIcon,
  BsArrowRight as ArrorForwardIcon,
} from "react-icons/bs";
import { removeUserLocalStorage } from "../../../../../utils/helper";
import { setUser } from "../../../../../hooks/user/actions";
import { USER_STRUCTURE } from "../../../../../hooks/user/constants";
import { setModal } from "../../../../../hooks/modal/actions";
import { MODAL_TYPES } from "../../../../../hooks/modal/constants";
import { Context } from "../../../../../hooks/store";
import Drawer from "../../../../elements/drawer";
import CartAdded from "../../../../cart/cartAdded";

const LeftMenuTitles = {
  AboutUs: "About Us",
  RequestaQuote: "Request a Quote",
  SiteMap: "Site Map",
  ContactUs: "Contact Us",
};

const RightMenuTitles = {
  Favorites: "Favorites",
  Account: "Account",
  Orders: "Orders",
  Cart: "Cart",
  SignUp: "Sign up",
  Login: "Login",
};

const OrderStatus = {
  Shipped: "Shipped",
  Arrived: "Arrived",
  Pending: "Pending",
  Canceled: "Canceled",
};

const TopNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isCartDrawer, setIsCartDrawer] = useState(false);
  const { userState, dispatchUser, dispatchModal } = useContext(Context);
  const setActiveMenuName = (name = null) => {
    setActiveMenu(name);
  };

  const handleSignOut = () => {
    removeUserLocalStorage();
    dispatchUser(setUser(USER_STRUCTURE));
    setActiveMenuName();
  };

  const data = {};
  data.menuLeft = [
    {
      title: LeftMenuTitles.AboutUs,
    },
    {
      title: LeftMenuTitles.RequestaQuote,
    },
    {
      title: LeftMenuTitles.SiteMap,
    },
    {
      title: LeftMenuTitles.ContactUs,
      detail: {
        title: "Contact Information",
        subTitle: "Consultations and ordering by phones:",
        phone: "(773) 281-3100",
        fax: "(773) 281-3131",
        email: "Info@BlueJayFasteners.com",
        address: "1770 W. Berteau Avenue \n Unit 402 \n Chicago, IL 60613",
      },
    },
  ];

  data.menuRight = [
    {
      title: RightMenuTitles.Account,
      icon: UserIcon,
      subMenuList: [
        {
          name: "My Account",
          isExpanded: true,
        },
        {
          name: "Basket (2 item)",
          isExpanded: true,
        },
        {
          name: "My Wish List (0)",
          isExpanded: true,
        },
        {
          name: "Sign Out",
          isExpanded: false,
          onClick: handleSignOut,
        },
      ],
      show: Boolean(userState.user?.id),
    },
    {
      title: RightMenuTitles.Favorites,
      icon: FavoriteIcon,
      subMenuList: [
        {
          img: "/img/screw.png",
          title: "Alloy Steel Ultra-Low-Profile Socket Head Screws",
          price: "5.64",
        },
        {
          img: "/img/screw.png",
          title: "Alloy Steel Ultra-Low-Profile Socket Head Screws",
          price: "5.64",
        },
        {
          img: "/img/screw.png",
          title: "Alloy Steel Ultra-Low-Profile Socket Head Screws",
          price: "5.64",
        },
        {
          img: "/img/screw.png",
          title: "Alloy Steel Ultra-Low-Profile Socket Head Screws",
          price: "5.64",
        },
      ],
      show: Boolean(userState.user?.id),
    },
    {
      title: RightMenuTitles.Orders,
      icon: ListIcon,
      subMenuList: [
        {
          serialNumber: "№ 339240",
          dateTime: "19.02.2020  04:20",
          status: OrderStatus.Shipped,
          items: "24",
          price: "697.00",
        },
        {
          serialNumber: "№ 339240",
          dateTime: "19.02.2020  04:20",
          status: OrderStatus.Arrived,
          items: "24",
          price: "697.00",
        },
        {
          serialNumber: "№ 339240",
          dateTime: "19.02.2020  04:20",
          status: OrderStatus.Pending,
          items: "24",
          price: "697.00",
        },
        {
          serialNumber: "№ 339240",
          dateTime: "19.02.2020  04:20",
          status: OrderStatus.Canceled,
          items: "24",
          price: "697.00",
        },
      ],
      show: Boolean(userState.user?.id),
    },
    {
      title: RightMenuTitles.SignUp,
      icon: "",
      subMenuList: [],
      show: !Boolean(userState.user?.id),
      onClick: () => dispatchModal(setModal(MODAL_TYPES.REGISTRATION)),
    },
    {
      title: RightMenuTitles.Login,
      icon: "",
      subMenuList: [],
      show: !Boolean(userState.user?.id),
      onClick: () => dispatchModal(setModal(MODAL_TYPES.LOGIN)),
    },
    {
      title: RightMenuTitles.Cart,
      icon: Cart,
      subMenuList: [
        {
          img: "/img/Cart.svg",
          title: "Your Basket is empty",
          subTitle: "Keep Shopping",
        },
      ],
      show: Boolean(userState.user?.id),
      onClick: () => openCartDrawer(),
    },
  ];

  const classes = {};
  classes.button =
    "px-5 py-2 text-white text-sm hover:bg-alpha focus:outline-none focus:bg-alpha";
  classes.icon = "mr-2 text-base";
  classes.arrow = "ml-1 text-lg";
  classes.dropdown = `${classes.button} flex items-center pl-6 pr-4`;
  classes.items =
    "absolute right-0 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-b-md outline-none";

  const openCartDrawer = () => {
    setIsCartDrawer(true);
  };

  const closeCartDrawer = () => {
    setIsCartDrawer(false);
  };

  return (
    <div className="flex items-center bg-primary">
      <Drawer isOpen={isCartDrawer} closeDrawer={closeCartDrawer}>
        <CartAdded closeCartDrawer={closeCartDrawer} />
      </Drawer>
      <div className="container flex justify-between mx-auto">
        <div className="relative flex items-center">
          {data.menuLeft.map((menu, index) => {
            const { detail } = menu || {};
            const isDetail = detail && Object.keys(detail).length > 0;
            return (
              <Menu
                as="div"
                key={index}
                className="relative"
                onMouseLeave={() => setActiveMenuName()}
              >
                <Menu.Button
                  className={classes.dropdown}
                  onMouseOver={() => setActiveMenuName(menu.title)}
                >
                  {menu.title}
                  {isDetail && <ArrowIcon className={classes.arrow} />}
                </Menu.Button>
                {activeMenu === menu.title && (
                  <Transition
                    show={activeMenu == menu.title}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    className="absolute z-40 right-0"
                  >
                    {menu.title === LeftMenuTitles.ContactUs &&
                      ContactUsDetail(menu.detail)}
                  </Transition>
                )}
              </Menu>
            );
          })}
        </div>
        <div className="relative flex items-center">
          {data.menuRight.map((menu, index) => {
            const { subMenuList, show, onClick } = menu || {};
            const isSubMenuList = subMenuList && subMenuList.length > 0;
            return (
              <Menu
                as="div"
                key={index}
                className="relative"
                onMouseLeave={() => setActiveMenuName()}
              >
                <Fragment>
                  {show && (
                    <Menu.Button
                      className={classes.dropdown}
                      onMouseOver={() => setActiveMenuName(menu.title)}
                      onClick={onClick}
                    >
                      {menu.icon && <menu.icon className={classes.icon} />}
                      {menu.title === RightMenuTitles.Account ? (
                        <span className="capitalize">
                          {userState.user?.firstName}
                        </span>
                      ) : (
                        menu.title
                      )}
                      {isSubMenuList && <ArrowIcon className={classes.arrow} />}
                    </Menu.Button>
                  )}
                  {activeMenu === menu.title && isSubMenuList && (
                    <Transition
                      show={activeMenu === menu.title}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                      className="absolute z-40 right-0"
                    >
                      {menu.title === RightMenuTitles.Favorites &&
                        FavoritesMenuItems(subMenuList)}
                      {menu.title === RightMenuTitles.Account &&
                        AccountMenuItems(subMenuList)}
                      {menu.title === RightMenuTitles.Orders &&
                        OrdersMenuItems(subMenuList)}
                      {menu.title === RightMenuTitles.Cart &&
                        CartMenuItems(subMenuList)}
                    </Transition>
                  )}
                </Fragment>
              </Menu>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ContactUsDetail = (detail) => (
  <Menu.Items
    className="font-ubuntu bg-white outline-none p-6 text-dark rounded-b shadow-grey-8"
    static
  >
    <Menu.Item as="div" className="font-medium mb-3 focus:outline-none">
      {detail.title}
    </Menu.Item>
    <Menu.Item
      as="div"
      className="font-light text-sm truncate opacity-75 focus:outline-none"
    >
      {detail.subTitle}
    </Menu.Item>
    <hr className="my-3 opacity-05" />
    <Menu.Item as="div" className="flex text-sm mb-3 focus:outline-none">
      <span className="opacity-75 w-16">Phone:</span>
      {detail.phone}
    </Menu.Item>
    <Menu.Item as="div" className="flex text-sm focus:outline-none">
      <span className="opacity-75 w-16">Fax:</span>
      {detail.fax}
    </Menu.Item>
    <hr className="my-3 opacity-05" />
    <Menu.Item as="div" className="flex text-sm mb-3 focus:outline-none">
      <span className="opacity-75 w-16 truncate ">E-mail:</span>
      {detail.email}
    </Menu.Item>
    <hr className="my-3 opacity-05" />
    <Menu.Item
      as="div"
      className="flex text-sm whitespace-pre-line focus:outline-none"
    >
      <span className="opacity-75 w-16">Address:</span>
      {detail.address}
    </Menu.Item>
  </Menu.Items>
);

const FavoritesMenuItems = (subMenuList) => (
  <Menu.Items
    className="font-ubuntu bg-white outline-none pt-3 mt-3 -right-8 text-dark rounded relative min-w-300 shadow-grey-8"
    static
  >
    <span className="w-5 h-5 -mt-2 mr-5 rounded-sm bg-white absolute -z-1 right-0 top-0 transform rotate-45" />
    {subMenuList.map((subMenu, index) => {
      const { img, title, price } = subMenu || {};
      return (
        <Fragment key={index}>
          <Menu.Item
            as="div"
            className="flex justify-between items-center text-dark py-4 cursor-pointer hover:bg-opacity-05 hover:bg-primary focus:outline-none"
          >
            <div className="pl-6 pr-4 flex items-center">
              <Image
                src={img}
                width="30"
                height="30"
                className="object-contain"
              />
            </div>
            <div className="text-xs leading-4 w-48">{title}</div>
            <div className="text-sm font-medium pr-6 pl-10">${price}</div>
          </Menu.Item>
          {index !== subMenuList.length - 1 && (
            <hr className="opacity-05 mx-6" />
          )}
        </Fragment>
      );
    })}
    <Menu.Item
      as="div"
      className="text-primary text-sm text-center w-full py-4 bg-primary bg-opacity-05 rounded-b  focus:outline-none cursor-pointer"
    >
      Show all results
    </Menu.Item>
  </Menu.Items>
);

const AccountMenuItems = (subMenuList) => (
  <Menu.Items
    className="font-ubuntu bg-white outline-none py-2 mt-3 -right-8 text-dark rounded relative min-w-200 shadow-grey-8"
    static
  >
    <span className="w-5 h-5 -mt-2 mr-5 rounded-sm bg-white absolute -z-1 right-0 top-0 transform rotate-45" />
    {subMenuList.map((subMenu, index) => {
      const { name, isExpanded, onClick } = subMenu || {};
      return (
        <Fragment key={index}>
          <Menu.Item
            onClick={onClick}
            as="div"
            className="text-base flex items-center justify-between px-6 py-3 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer focus:outline-none"
          >
            {name} {isExpanded && <ChevronRight className="text-lg ml-10" />}
          </Menu.Item>
          {index !== subMenuList.length - 1 && (
            <hr className="opacity-05 mx-6" />
          )}
        </Fragment>
      );
    })}
  </Menu.Items>
);

const OrdersMenuItems = (subMenuList) => (
  <Menu.Items
    className="font-ubuntu bg-white outline-none pt-3 mt-3 -right-8 text-dark rounded relative min-w-300 shadow-grey-8"
    static
  >
    <span className="w-5 h-5 -mt-2 mr-5 rounded-sm bg-white absolute -z-1 right-0 top-0 transform rotate-45" />
    {subMenuList.map((subMenu, index) => {
      const { serialNumber, dateTime, status, items, price } = subMenu || {};
      let statusBgColor = "bg-primary";
      if (status === OrderStatus.Arrived) statusBgColor = "bg-success";
      if (status === OrderStatus.Pending) statusBgColor = "bg-warning";
      if (status === OrderStatus.Canceled) statusBgColor = "bg-error";
      return (
        <Fragment key={index}>
          <Menu.Item
            as="div"
            className="text-dark py-3 px-6 focus:outline-none hover:bg-primary hover:bg-opacity-05"
          >
            <div className="flex justify-between pb-2">
              <div className="text-sm font-medium">{serialNumber}</div>
              <div
                className={`${statusBgColor} text-xs text-white rounded-2xl px-3 flex items-center`}
              >
                {status}
              </div>
            </div>
            <div className="flex justify-between items-center pb-1">
              <div className="text-xs font-light pr-20 flex-none">
                {dateTime}
              </div>
              <div className="flex-none pr-24">
                <span className="text-xs font-light">{items} items at </span>
                <span className="text-sm font-medium">${price}</span>
              </div>
            </div>
            <div className="flex text-xs text-primary font-light items-center cursor-pointer">
              <span className="pr-2">Learn more</span>
              <span>
                <ArrorForwardIcon />
              </span>
            </div>
          </Menu.Item>
          <hr className="opacity-05 mx-6" />
        </Fragment>
      );
    })}
    <Menu.Item
      as="div"
      className="text-primary text-sm text-center w-full py-2 rounded-b cursor-pointer"
    >
      Show All
    </Menu.Item>
  </Menu.Items>
);

const CartMenuItems = (subMenuList) => (
  <Menu.Items
    className="font-ubuntu bg-white outline-none py-2 mt-3 -right-8 text-dark rounded relative min-w-300 shadow-grey-8"
    static
  >
    <span className="w-5 h-5 -mt-2 mr-5 rounded-sm bg-white absolute -z-1 right-0 top-0 transform rotate-45" />
    {subMenuList.map((subMenu, index) => {
      const { img, title, subTitle } = subMenu || {};
      return (
        <Fragment key={index}>
          <Menu.Item
            as="div"
            className="text-base flex items-center px-8 py-3 focus:outline-none cursor-pointer"
          >
            <div className="flex-none">
              <Image
                src={img}
                width="27"
                height="29"
                className="object-contain"
              />
            </div>
            <div className="ml-8 mr-32 flex-none">
              <div className="font-medium">{title}</div>
              <div className="text-primary">{subTitle}</div>
            </div>
          </Menu.Item>
        </Fragment>
      );
    })}
  </Menu.Items>
);

const MenuItemOld = ({ children, dropdown, icon, ...props }) => (
  <div
    className="flex items-center inline-block px-4 py-2 text-sm text-white"
    {...props}
  >
    {icon}
    {dropdown && (
      <div className="flex items-center">
        <span className="pl-2 pr-1 text-sm">{children}</span>
        <span className="text-lg">
          <ArrowIcon />
        </span>
      </div>
    )}
    {!dropdown && children}
  </div>
);

const MenuItem = ({ children, ...props }) => (
  <div className="inline-block px-4 py-2 text-sm text-white" {...props}>
    {children}
  </div>
);

const DropDown = ({ children, icon, ...props }) => (
  <MenuItem>
    {icon}
    <span className="pl-2 pr-1 text-sm">{children}</span>
    <span className="text-lg">
      <ArrowIcon />
    </span>
  </MenuItem>
);

const DropDownOld = ({ children, icon, ...props }) => (
  <div className="flex items-center text-white">
    {icon}
    <MenuItem className="flex">
      <span className="pl-2 pr-1 text-sm">{children}</span>
    </MenuItem>
    <span className="text-lg">
      <ArrowIcon />
    </span>
  </div>
);

export default TopNavbar;
