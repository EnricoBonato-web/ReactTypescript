import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseType from './ExpenseType';
import ExpensesList from './ExpensesList';

function Expenses(props: ExpenseType[]) {
  const [filteredYear, setFilteredYear] = useState('2020');
  let filteredExpenses = Object.values(props).filter((prop: ExpenseType) => {
    return prop.date.getFullYear() === +filteredYear ? 1 : 0;
  });
  const filteredChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
