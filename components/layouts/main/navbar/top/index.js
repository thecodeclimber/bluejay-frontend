import { Fragment } from "react";
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
} from "react-icons/bs";

const RightMenuTitles = {
  Favorites: "Favorites",
  Account: "Account",
  Orders: "Orders",
  Cart: "Cart",
}

const TopNavbar = () => {
  const data = {};
  data.menuLeft = [
    {
      title: "About Us",
    },
    {
      title: "Contact",
      subMenu: {
        title: "Contact Information",
        subTitle: "Consultations and ordering by phones:",
        phone: "(773) 281-3100",
        fax: "(773) 281-3131",
        email: "Info@BlueJayFasteners.com",
        address: "1770 W. Berteau Avenue \n Unit 402 \n Chicago, IL 60613",
      },
    },
    {
      title: "Request a Quote",
    },
    {
      title: "Site Map",
    },
  ];

  data.menuRight = [
    {
      title: RightMenuTitles.Favorites,
      icon: FavoriteIcon,
      subMenuList: [{
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
      }],
    },
    {
      title: RightMenuTitles.Account,
      icon: UserIcon,
      subMenuList: [{
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
      }],
    },
    {
      title: RightMenuTitles.Orders,
      icon: ListIcon,
      subMenuList: [{
        serialNumber: "№ 339240",
        dateTime: "19.02.2020  04:20",
        status: "Shipped",
        items: "24",
        price: "697.00",
      },
      {
        serialNumber: "№ 339240",
        dateTime: "19.02.2020  04:20",
        status: "Shipped",
        items: "24",
        price: "697.00",
      },
      {
        serialNumber: "№ 339240",
        dateTime: "19.02.2020  04:20",
        status: "Shipped",
        items: "24",
        price: "697.00",
      },
      {
        serialNumber: "№ 339240",
        dateTime: "19.02.2020  04:20",
        status: "Shipped",
        items: "24",
        price: "697.00",
      }],
    },
    {
      title: RightMenuTitles.Cart,
      icon: Cart,
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

  return (
    <div className="flex items-center bg-primary">
      <div className="container flex justify-between mx-auto">
        <div className="relative flex items-center">
          {data.menuLeft.map((menu, index) => {
            const { subMenu } = menu || {};
            return (
              <Menu as="div" key={index} className="relative">
                {({ open }) => (
                  <Fragment>
                    <Menu.Button
                      className={subMenu ? classes.dropdown : classes.button}
                    >
                      {menu.title}
                      {subMenu && <ArrowIcon className={classes.arrow} />}
                    </Menu.Button>
                    {open && subMenu &&
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        className="absolute z-10"
                      >

                        <Menu.Items className="font-ubuntu bg-white outline-none p-6 text-dark rounded-b shadow-grey-8">
                          <Menu.Item as="div" className="font-medium mb-3">{subMenu.title}</Menu.Item>
                          <Menu.Item as="div" className="font-light text-sm truncate opacity-75">{subMenu.subTitle}</Menu.Item>
                          <hr className="my-3 opacity-05" />
                          <Menu.Item as="div" className="flex text-sm mb-3"><span className="opacity-75 w-16">Phone:</span>{subMenu.phone}</Menu.Item>
                          <Menu.Item as="div" className="flex text-sm"><span className="opacity-75 w-16">Fax:</span>{subMenu.fax}</Menu.Item>
                          <hr className="my-3 opacity-05" />
                          <Menu.Item as="div" className="flex text-sm mb-3"><span className="opacity-75 w-16 truncate ">E-mail:</span>{subMenu.email}</Menu.Item>
                          <hr className="my-3 opacity-05" />
                          <Menu.Item as="div" className="flex text-sm whitespace-pre-line"><span className="opacity-75 w-16">Address:</span>{subMenu.address}</Menu.Item>
                        </Menu.Items>
                      </Transition>
                    }
                  </Fragment>
                )}
              </Menu>
            )
          })}
        </div>
        <div className="relative flex items-center">
          {data.menuRight.map((menu, index) => {
            const { subMenuList } = menu || {};
            const isSubMenuList = subMenuList && subMenuList.length > 0;
            return (
              <Menu as="div" key={index} className="relative">
                {({ open }) => (
                  <Fragment>
                    <Menu.Button className={classes.dropdown}>
                      {menu.icon && <menu.icon className={classes.icon} />}
                      {menu.title}
                      {isSubMenuList && <ArrowIcon className={classes.arrow} />}
                    </Menu.Button>
                    {open && isSubMenuList &&
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        className="absolute z-10 right-0"
                      >
                        {menu.title === RightMenuTitles.Favorites && FavoritesMenuItems(subMenuList)}
                        {menu.title === RightMenuTitles.Account && AccountMenuItems(subMenuList)}
                      </Transition>
                    }
                  </Fragment>
                )}
              </Menu>
            )
          })}
        </div>
      </div>
    </div>
  );
};

const FavoritesMenuItems = (subMenuList) => (
  <Menu.Items className="font-ubuntu bg-white outline-none pt-3 mt-3 -right-8 text-dark rounded relative min-w-332 shadow-grey-8">
    <span className="w-5 h-5 -mt-2 mr-5 rounded-sm bg-white absolute -z-1 right-0 top-0 transform rotate-45" />
    {subMenuList.map((subMenu, index) => {
      const { img, title, price } = subMenu || {}
      return (
        <Fragment key={index}>
          <Menu.Item as="div" className="flex justify-between text-dark py-4 cursor-pointer">
            <div className="pl-6 pr-4">
              <Image src={img} width="30" height="30" className="object-contain" />
            </div>
            <div className="text-xs leading-4 w-48">{title}</div>
            <div className="text-sm font-medium pr-6">${price}</div>
          </Menu.Item>
          {index !== (subMenuList.length - 1) && <hr className="opacity-05 mx-6" />}
        </Fragment>)
    })}
    <Menu.Item as="div" className="text-primary text-sm text-center w-full py-4 bg-primary bg-opacity-05 rounded-b">
      Show all results
      </Menu.Item>
  </Menu.Items>
);


const AccountMenuItems = (subMenuList) => (
  <Menu.Items className="font-ubuntu bg-white outline-none py-2 mt-3 -right-8 text-dark rounded relative min-w-220 shadow-grey-8">
    <span className="w-5 h-5 -mt-2 mr-5 rounded-sm bg-white absolute -z-1 right-0 top-0 transform rotate-45" />
    {subMenuList.map((subMenu, index) => {
      const { name, isExpanded } = subMenu || {}
      return (
        <Fragment key={index}>
          <Menu.Item as="div" className="text-base flex items-center justify-between px-6 py-3 truncate hover:text-primary hover:bg-primary hover:bg-opacity-05 cursor-pointer">
            {name} {isExpanded && <ChevronRight className="text-lg" />}
          </Menu.Item>
          {index !== (subMenuList.length - 1) && <hr className="opacity-05 mx-6" />}
        </Fragment>)
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
