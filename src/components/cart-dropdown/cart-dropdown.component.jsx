import React from "react";
import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import CartContext from "../../context/cart.context";

import "./cart-dropdown.styles.css";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}

      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
