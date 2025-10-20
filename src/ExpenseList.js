import React from "react";
import "./App.css";

const categoryColors = {
  Food: "#f8d7da",
  Transport: "#d1ecf1",
  Entertainment: "#fff3cd",
  Bills: "#d4edda",
  Other: "#e2e3e5"
};

function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="expense-list-container">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((exp, index) => (
          <li
            key={index}
            style={{
              backgroundColor: categoryColors[exp.category] || "#e2e3e5"
            }}
          >
            <div>
              <strong>{exp.title}</strong> - ₹{exp.amount} <em>({exp.category})</em>
            </div>
            <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
