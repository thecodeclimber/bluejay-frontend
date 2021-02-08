export const MESSAGES = {
  SOMETHING_WENT_WRONG: "Something went wrong",
  INTERNAL_ERROR: "Internal error",
  SERVER_ERROR: "Server error",
  UNAUTHORIZED: "Unauthorized",
  BAD_GATEWAY: "Bad gateway",
};

export const SORT_OPTIONS = {
  ALPHABET: {
    name: "a-z",
    value: "name",
    type: "sort",
  },
  ASC_ORDER: {
    name: "ascending order",
    value: "asc",
    type: "direction",
  },
  DESC_ORDER: {
    name: "descending order",
    value: "desc",
    type: "direction",
  },
};

export const SORT_OPTIONS_ARRAY = [
  SORT_OPTIONS.ALPHABET,
  SORT_OPTIONS.ASC_ORDER,
  SORT_OPTIONS.DESC_ORDER,
];

export const dashboardSideBarList = [
  {
    icon: "/img/user-icon.svg",
    name: "My Profile",
    link: "profile",
  },
  {
    icon: "/img/user-cart-icon.svg",
    name: "My Orders",
    link: "orders",
  },
  {
    icon: "/img/invoice-icon.svg",
    name: "Invoices",
    link: "invoices",
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
