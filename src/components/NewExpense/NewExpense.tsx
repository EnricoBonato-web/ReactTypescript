import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const onSaveExpenseData = (enteredExpenseData:{title:string,amount:number,data:Date}) => {
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()

    }
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};
export default NewExpense;
