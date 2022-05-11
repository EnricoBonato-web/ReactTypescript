import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

function Expenses(items: { date: Date; title: string; amount: number }[]) {
  return (
    <Card className="expenses">
      <ExpenseItem {...items[0]} />
      <ExpenseItem {...items[1]} />
      <ExpenseItem {...items[2]} />
      <ExpenseItem {...items[3]} />
    </Card>
  );
}

export default Expenses;
