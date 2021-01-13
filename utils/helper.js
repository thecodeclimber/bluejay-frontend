import { useState, useRef, useEffect } from "react";
import jwt from "jsonwebtoken";
import { MESSAGES } from "./constants";

const { v4: uuidv4 } = require("uuid");

export const useStateCallback = (initialState) => {
  const [isSubmit, setIsSubmit] = useState(initialState);
  const cbRef = useRef(null);

  const setIsSubmitCallback = (isSubmit, cb) => {
    cbRef.current = cb;
    setIsSubmit(isSubmit);
  };

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(isSubmit);
      cbRef.current = null;
    }
  }, [isSubmit]);

  return [isSubmit, setIsSubmitCallback];
};

/**
 * Validate email
 *
 * @param {String} email
 *
 * @return {Boolean}
 */
export const validateEmail = (email) => {
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(EMAIL_REGEX)) return true;
  return false;
};

/**
 * Validate number and character
 *
 * @param {String} text
 *
 * @return {Boolean}
 */
export const validateNumberAndCharacter = (text) => {
  const NUMBER_CHARACTER_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (text.match(NUMBER_CHARACTER_REGEX)) return true;
  return false;
};

/**
 * Set user in local storage
 *
 * @param {Object} data
 *
 * @return {Boolean}
 */
export const setUserLocalStorage = (data) => {
  if (!data) return false;
  localStorage.setItem("user", JSON.stringify(data));
  return true;
};

/**
 * Remove user from local storage
 *
 * @return {Boolean}
 */
export const removeUserLocalStorage = () => {
  localStorage.removeItem("user");
  return true;
};

/**
 * Set search history in local storage
 *
 * @param {Object} data
 */
export const setSearchHistoryLocalStorage = (data) => {
  if (!data) return;
  localStorage.setItem("searchHistory", JSON.stringify(data));
};

/**
 * Get search history from local storage
 *
 * @param {Object} data
 *
 * @return {Object}
 */
export const getSearchHistoryLocalStorage = () => {
  return JSON.parse(localStorage.getItem("searchHistory"));
};

/**
 * Get user data
 *
 * @return {Object}
 * @return {Null}
 */
export const getUserData = (userState = {}) => {
  const authToken = JSON.parse(localStorage.getItem("user"));
  if (authToken && authToken.token) {
    const token = authToken.token.split(".");
    if (token.length > 1) {
      const decodedData = JSON.parse(atob(token[1]));
      if (!decodedData.exp || Date.now() > decodedData.exp * 1000) {
        localStorage.removeItem("user");
        return null;
      }

      const { user } = userState;
      const userData = {
        ...user,
        id: authToken.user.id,
        email: authToken.user.email,
        firstName: authToken.user.first_name,
        lastName: authToken.user.last_name,
        token: authToken.token,
      };

      return userData;
    }
  }
  return null;
};

/**
 * Verify Token
 *
 * @param {Object} req
 *
 * @return {String}
 * @return {Null}
 */
export const verifyToken = (req) => {
  try {
    const { authorization } = req.headers || {};
    if (authorization && authorization.startsWith("Bearer ")) {
      const token = authorization.substring(7, authorization.length);
      return jwt.verify(token, process.env.NEXT_PUBLIC_CLIENT_SECRET);
    }
    return null;
  } catch (e) {
    return null;
  }
};

/**
 * Generate Token
 *
 * @param {Number} customerId
 *
 * @returns {String}
 * @returns {Null}
 */
export const generateToken = (customerId) => {
  if (!customerId) return null;
  const dateCreated = Math.round(new Date().getTime() / 1000);
  const payload = {
    iss: process.env.NEXT_PUBLIC_CLIENT_ID,
    iat: dateCreated,
    jti: uuidv4(),
    operation: "customer_login",
    store_hash: process.env.NEXT_PUBLIC_BIG_COMMERCE_STORE_HASH,
    customer_id: customerId,
  };
  return jwt.sign(payload, process.env.NEXT_PUBLIC_CLIENT_SECRET, {
    expiresIn: "7d",
    algorithm: "HS256",
  });
};

/**
 * Response Error
 *
 * @param {Object} res
 * @returns {Object}
 */
const resError = (res) => {
  return res.status(500).json({
    errors: {
      error: MESSAGES.SOMETHING_WENT_WRONG,
    },
  });
};

/**
 * Verify Get Method
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Boolean}
 */
export const verifyGetMethod = (req, res) => {
  if (req.method !== "GET") {
    resError(res);
    return false;
  }
  return true;
};

/**
 * Verify Post Method
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Boolean}
 */
export const verifyPostMethod = (req, res) => {
  if (req.method !== "POST") {
    resError(res);
    return false;
  }
  return true;
};

/**
 * Verify Put Method
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Boolean}
 */
export const verifyPutMethod = (req, res) => {
  if (req.method !== "PUT") {
    resError(res);
    return false;
  }
  return true;
};

/**
 * Verify Delete Method
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Boolean}
 */
export const verifyDeleteMethod = (req, res) => {
  if (req.method !== "DELETE") {
    resError(res);
    return false;
  }
  return true;
};

/**
 * Formatting cart products
 *
 * @param {Array} cartProducts
 * @param {Object} product
 *
 * @returns {Array}
 */
export const formattingCartProducts = (cartProducts = [], product = {}) => {
  if (Object.keys(product).length > 0) {
    const index = cartProducts.findIndex((data) => data.id === product.id);
    if (index !== -1) {
      cartProducts[index] = {
        ...cartProducts[index],
        quantity: cartProducts[index].quantity + 1,
      };
      return cartProducts;
    }
  }
  return [...cartProducts, product];
};

/**
 * Formatting product options
 *
 * @param {Array} productOptions
 *
 * @returns {Array}
 */
export const formattingProductOptions = (productOptions) => {
  const optionSelections = [];
  if (productOptions && productOptions.length > 0) {
    productOptions.forEach((data) => {
      let optionSelectionsStructure = {
        option_id: data.id,
        option_value: "",
      };
      if (data.option_values && data.option_values.length > 0) {
        const selectedOption =
          data.option_values.find(({ is_default }) => is_default) ||
          data.option_values[0];
        optionSelectionsStructure = {
          ...optionSelectionsStructure,
          option_value: selectedOption.id,
        };
      }
      optionSelections.push(optionSelectionsStructure);
    });
  }
  return optionSelections;
};

/**
 * Formatting cart params
 *
 * @param {Array} cartProducts
 * @param {Object} product
 *
 * @returns {Array}
 */
export const getFormattedCartParams = (cartProducts = [], product = {}) => {
  const getProduct = cartProducts.find((data) => data.id === product.id);
  const optionSelections = formattingProductOptions(getProduct.options);
  const userData = getUserData();
  let params = {
    quantity: getProduct.quantity,
    product_id: getProduct.id,
  };
  if (optionSelections && optionSelections.length > 0) {
    params = { ...params, option_selections: optionSelections };
  }
  if (userData?.id) {
    params = { ...params, customer_id: userData?.id };
  }
  // if (cartId) {
  //   customer_id = { ...params, cart_id: cartId };
  // }
  return params;
};

/**
 * Set cart in local storage
 *
 * @param {Object} data
 *
 * @return {Boolean}
 */
export const setCartLocalStorage = (cartId, time) => {
  if (!cartId) return false;
  const data = {
    cartId,
    cartExpiryAt: time,
  };
  localStorage.setItem("cart", JSON.stringify(data));
  return true;
};

/**
 * Remove cart from local storage
 *
 * @return {Boolean}
 */
export const removeCartLocalStorage = () => {
  localStorage.removeItem("cart");
  return true;
};
