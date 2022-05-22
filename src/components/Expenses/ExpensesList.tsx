import React from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseType from './ExpenseType';
import './ExpensesList.css';
const ExpensesList = (filteredExpenses: ExpenseType[]) => {
  if (Object.keys(filteredExpenses).length > 0)
    return (
      <ul className="expenses-list">
        {Object.values(filteredExpenses).map((prop: ExpenseType) => {
          return <ExpenseItem key={prop.id} {...prop} />;
        })}
      </ul>
    );
  else {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
};
export default ExpensesList;
