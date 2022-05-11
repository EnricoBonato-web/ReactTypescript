import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props:{date:Date,title:string,amount:number}) {
    return (
      <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate> 
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </div>
    );
  }
  

export default ExpenseItem;