import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const Store = createContext();

const initialState = {
  // AllCoins: localStorage.getItem("allCoins")
  //   ? JSON.parse(localStorage.getItem("allCoins"))
  //   : [],
  CurrentCurrency: localStorage.getItem("currentCurrency")
    ? JSON.parse(localStorage.getItem("currentCurrency"))
    : "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ALL_COINS":
      return {
        ...state,
        AllCoins: action.payload,
      };

    case "CURRENT_CURRENCY":
      return {
        ...state,
        CurrentCurrency: action.payload,
      };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
