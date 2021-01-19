import React, { createContext, useReducer } from "react";
import userReducer from "./user/reducer";
import modalReducer from "./modal/reducer";
import cartReducer from "./cart/reducer";
import initialModalState from "./modal/state";
import initialUserState from "./user/state";
import initialCartState from "./cart/state";

const Store = ({ children }) => {
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);
  const [modalState, dispatchModal] = useReducer(
    modalReducer,
    initialModalState
  );

  const data = {
    userState,
    cartState,
    modalState,
    dispatchUser,
    dispatchCart,
    dispatchModal,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const Context = createContext();
export default Store;
