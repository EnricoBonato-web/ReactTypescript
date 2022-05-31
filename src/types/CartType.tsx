import CartItem from "./CartItem";
type CartType = {
  items: CartItem[];
  totalAmount: number;
  addItem?: (item: CartItem) => {} | void;
  removeItem?: (id: string) => {} | void;
};
export default CartType;
