import React, { useReducer } from 'react';
import CartItem from '../types/CartItem';
import CartType from '../types/CartType';
import CartContext from './cart-context';
const REMOVE_CART_ITEM: string = 'REMOVE_CART_ITEM';
const ADD_CART_ITEM: string = 'ADD_CART_ITEM';

const defaultCartState: CartType = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state: any, action: any) => {
  if (action.type === ADD_CART_ITEM) {
    const updatedItems: CartItem[] = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount } ;
  }
  return defaultCartState;
};
const CartProvider = (props: any) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: ADD_CART_ITEM, item: item });
  };
  const removeItemToCartHandler = (id: string) => {
    dispatchCartAction({ type: REMOVE_CART_ITEM, id: id });
  };
  const cartContext: CartType = {
    items: cartState!.items,
    totalAmount: cartState!.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
