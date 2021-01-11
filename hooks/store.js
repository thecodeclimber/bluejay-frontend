import React, { createContext, useReducer } from "react";
import UserReducer from "./user/reducer";
import modalReducer from "./modal/reducer";
import initialModalState from "./modal/state";
import initialUserState from "./user/state";

const Store = ({ children }) => {
  const [userState, dispatchUser] = useReducer(UserReducer, initialUserState);
  const [modalState, dispatchModal] = useReducer(
    modalReducer,
    initialModalState
  );
  const data = { userState, modalState, dispatchUser, dispatchModal };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const Context = createContext();
export default Store;
