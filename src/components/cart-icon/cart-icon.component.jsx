import React from "react";
import { useContext } from "react";

import CartContext from "../../context/cart.context";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { clickCart, setClickCart } = useContext(CartContext);
  const { cartItemCount } = useContext(CartContext);

  const isCartOpen = () => setClickCart(!clickCart);

  return (
    <CartIconContainer onClick={isCartOpen}>
      <ShoppingIcon />

      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
