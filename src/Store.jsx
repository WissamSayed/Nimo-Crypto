import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const Store = createContext();

const initialState = {
  PinnedCurrency: localStorage.getItem("PinnedCurrency")
    ? JSON.parse(localStorage.getItem("PinnedCurrency"))
    : "",
};

function reducer(state, action) {
  switch (action.type) {
    case "Pinned_CURRENCY":
      return {
        ...state,
        PinnedCurrency: action.payload,
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
