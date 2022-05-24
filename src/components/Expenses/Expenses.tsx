import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseType from './ExpenseType';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

function Expenses(props: ExpenseType[]) {
  const [filteredYear, setFilteredYear] = useState('2020');
  let filteredExpenses: ExpenseType[] = Object.values(props).filter((prop: ExpenseType) => {
    return prop.date.getFullYear() === +filteredYear;
  });
  const filteredChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
      <ExpensesChart {...filteredExpenses}/>
      <ExpensesList {...filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
