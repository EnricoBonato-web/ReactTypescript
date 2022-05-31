import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props: any) => {
  const addItemToCartHandler = (item:any) => {};
  const removeItemToCartHandler = (id:any) => {};
  const cartContext={items:[],totalAmount:0,addItem:addItemToCartHandler,removeItem:removeItemToCartHandler}
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;