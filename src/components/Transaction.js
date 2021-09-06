import React, { useContext } from "react";
import { GlobalContex } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  //delete transaction action
  const { deleteTransaction } = useContext(GlobalContex);

  const sign = transaction.amount < 0 ? "-" : "+";
  const className = sign === "-" ? "minus" : "plus";

  return (
    <li className={className}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};
