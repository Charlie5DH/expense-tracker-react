import React, { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContex);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
