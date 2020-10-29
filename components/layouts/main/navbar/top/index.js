import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import {
  MdAccountCircle as UserIcon,
  MdArrowDropDown as ArrowIcon,
  MdFavorite as FavoriteIcon,
  MdShoppingCart as Cart,
} from "react-icons/md";

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
      title: "Favorites",
      icon: FavoriteIcon,
    },
    {
      title: "Account",
      icon: UserIcon,
    },
    {
      title: "Cart",
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
          <Menu>
            {data.menuLeft.map((menu, index) => (
              <Menu.Button
                className={menu.subMenu ? classes.dropdown : classes.button}
                key={index}
              >
                {menu.title}
                {menu.subMenu && <ArrowIcon className={classes.arrow} />}
              </Menu.Button>
            ))}
          </Menu>
        </div>
        <div className="relative flex items-center">
          <Menu>
            {data.menuRight.map((menu, index) => (
              <Fragment key={index}>
                <Menu.Button className={classes.dropdown}>
                  {menu.icon && <menu.icon className={classes.icon} />}
                  {menu.title && menu.title}
                  {menu.subMenu && <ArrowIcon className={classes.arrow} />}
                </Menu.Button>

                {menu.subMenu && (
                  <Menu.Items className={classes.items} style={{ top: "37px" }}>
                    <Menu.Item>
                      <h2>{menu.subMenu.title}</h2>
                    </Menu.Item>
                  </Menu.Items>
                )}
              </Fragment>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

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
