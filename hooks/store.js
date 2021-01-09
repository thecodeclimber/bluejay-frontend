import React, { createContext, useReducer } from "react";
import UserReducer from "./user/reducer";
import modalReducer from "./modal/reducer";
import initialModalState from "./modal/state";
import initialUserState from "./user/state";

const Store = ({ children }) => {
  const user = useReducer(UserReducer, initialUserState);
  const modal = useReducer(modalReducer, initialModalState);
  const reducers = { user, modal };

  return <Context.Provider value={reducers}>{children}</Context.Provider>;
};

export const Context = createContext();
export default Store;
