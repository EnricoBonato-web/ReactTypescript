import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseData from './ExpenseType';

function Expenses(props:any) { //ExpenseData[]&()=>{}
  console.log(props);
  const [filteredYear, setFilteredYear] = useState('2020');
  let expenses: ExpenseData[] = [];
  for (let i = 0; i < Object.keys(props).length-1; i++) {//TODO not the best but works
    expenses.push(props[i] as ExpenseData);  }
  const filteredChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
    props.onFilterYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
      {expenses.map((prop: ExpenseData) => {
        return <ExpenseItem key={prop.id} {...prop} />;
      })}
    </Card>
  );
}

export default Expenses;
