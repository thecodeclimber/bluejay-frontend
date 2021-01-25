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
