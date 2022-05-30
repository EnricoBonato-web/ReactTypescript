import React from "react";
import classes from "./Cart.module.css";
const Cart = (props: any) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
<span>Total Amount</span>
<span>35.62</span>
      </div>
      <button className={classes['button--alt']}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
  );
};

export default Cart;
