import React from "react";
import "./Summary.css";

function Summary({ totalIncome, totalExpenses, balance }) {
  return (
    <div className="summary-wrapper">
      <div className="summary-box income-box">
        <h3>Total Income</h3>
        <p>₹{totalIncome}</p>
      </div>
      <div className="summary-box expenses-box">
        <h3>Total Spent</h3>
        <p>₹{totalExpenses}</p>
      </div>
      <div className="summary-box balance-box">
        <h3>Balance</h3>
        <p>₹{balance}</p>
      </div>
    </div>
  );
}

export default Summary;
