import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseType from './ExpenseType';

function Expenses(props: ExpenseType[]) {
  const [filteredYear, setFilteredYear] = useState("2020");
  let expenses = Object.values(props).filter((prop: ExpenseType) => {
    return prop.date.getFullYear() === +filteredYear ? 1 : 0;
  });
  const filteredChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />

      {expenses.map((prop: ExpenseType) => {
        return <ExpenseItem key={prop.id} {...prop} />;
      })}
    </Card>
  );
}

export default Expenses;
