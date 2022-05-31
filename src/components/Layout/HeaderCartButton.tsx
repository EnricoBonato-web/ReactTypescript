import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props: any) => {
  //TODO Any
  const cartCtx=useContext(CartContext);
  const numberOfCartItems=cartCtx.items?cartCtx.items.reduce((curNumber,item)=>{return curNumber+item.amount},0):0;
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
