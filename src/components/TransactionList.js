import React from "react";
import { GlobalContex } from "../context/GlobalState";
import { useContext } from "react";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  // getting the globla state
  const { transactions } = useContext(GlobalContex);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
