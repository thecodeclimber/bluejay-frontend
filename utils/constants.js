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
    id: 1,
    icon: "/img/user-icon.svg",
    name: "My Profile",
    link: "profile",
  },
  {
    id: 2,
    icon: "/img/user-cart-icon.svg",
    name: "My Orders",
    link: "orders",
  },
  {
    id: 3,
    icon: "/img/invoice-icon.svg",
    name: "Invoices",
    link: "invoices",
  },
  {
    id: 4,
    icon: "/img/wishlist-icon.svg",
    name: "Wish List",
    link: "",
  },
  {
    id: 5,
    icon: "/img/order-icon.svg",
    name: "Order History",
    link: "",
  },
  {
    id: 6,
    icon: "/img/setting-icon.svg",
    name: "Account Details",
    link: "",
  },
  {
    id: 7,
    icon: "/img/logout-icon.svg",
    name: "Logout",
    link: "",
  },
  {
    id: 8,
    name: "Invoice Info #{ID}",
    link: "details",
    parentId: 3,
  },
];

export const STATUS = {
  PENDING: "Pending",
  ARRIVED: "Arrived",
};

export const MAX_QUANTITY = 10000;
