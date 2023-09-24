import React from "react";
interface Props {
  cartItems: string[];
  onClose: () => void;
  onRemove: () => void;
}
const Cart = ({ cartItems, onClose, onRemove }: Props) => {
  return (
    <>
      <div>Shopping Card Items:</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClose}>Clear</button>
      <button onClick={onRemove}>Remove</button>
    </>
  );
};

export default Cart;
