import React from "react";
import { useState, useContext } from "react";
import { GlobalContex } from "../context/GlobalState";
// Inputs need to be part of a state so we are bringing UseState hook

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContex);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount, // to take it as number
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
