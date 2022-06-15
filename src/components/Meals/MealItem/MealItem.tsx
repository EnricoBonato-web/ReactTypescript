import React from 'react';
import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import CartItem from '../../../types/CartItem';

const MealItems = (props: CartItem) => {
  const cartCtx = useContext<any>(CartContext);

  console.log(props.price)
  console.log(props)
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount: any) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm  id={props.id}onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItems;
