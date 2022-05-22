import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';
const NewExpense = (props: any) => {
  const [showAdd, setShowAdd] = useState(false);
  const changeState = () => {
    setShowAdd(showAdd => {
      return !showAdd;
    });
  };
  const showForm = () => {
    changeState();
  };
  const onSaveExpenseData = (enteredExpenseData: { title: string; amount: number; data: Date }) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    changeState();
  };

  return (
    <div className="new-expense">
      {showAdd ? (
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} cancel={changeState} />
      ) : (
        <button onClick={showForm}>Add New Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
