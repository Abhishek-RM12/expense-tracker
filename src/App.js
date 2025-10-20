import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Summary from "./Summary";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const handleIncomeChange = (e) => {
    setIncome(Number(e.target.value));
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const balance = income - totalExpenses;

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      
      <div className="income-container">
        <label>Total Income: </label>
        <input
          type="number"
          placeholder="Enter Income"
          value={income}
          onChange={handleIncomeChange}
        />
      </div>

      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      <Summary totalIncome={income} totalExpenses={totalExpenses} balance={balance} />
    </div>
  );
}

export default App;
