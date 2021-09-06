import React from "react";
import AppReducer from "./AppReducer";
import { createContext, useReducer } from "react";

//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//Create contex
export const GlobalContex = createContext(initialState);

//Provider components
// we will be wrapping the components as props to the global provider
// so they will be childrens
//whenever we use reducer we need to use dispatch
// the provider provides the state and any actions to the components that are wrapped

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions--------------
  function deleteTransaction(id) {
    dispatch({
      // dispatch an action
      type: "DELETE_TRANSACTION", //specify the type for the app reducer
      payload: id, // delete action (we need the id of the action to delete)
    });
  }

  function addTransaction(transaction) {
    dispatch({
      // dispatch an action
      type: "ADD_TRANSACTION", //specify the type for the app reducer
      payload: transaction, // add action (we need the id of the action to delete)
    });
  }

  return (
    <GlobalContex.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContex.Provider>
  );
};
