import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseType from './ExpenseType';

function Expenses(props: ExpenseType[]) {
  //ExpenseType[]&()=>{}
  const [filteredYear, setFilteredYear] = useState('2020');
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const filteredChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
    setExpenses([]);
    for (let i = 0; i < Object.keys(props).length; i++) {
      if (props[i].date.getFullYear() === +filteredYear)
        setExpenses(oldExpenses => {
          return [props[i], ...oldExpenses];
        });
    }
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
