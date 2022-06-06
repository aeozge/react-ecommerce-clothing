import React from "react";
import { useDispatch } from "react-redux";
import { selectIsCartOpen, selectCartCount} from "../../store/cart/cart.selector";
import setIsCartOpen from '../../store/cart/cart.action'
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)
 
  const toogleisCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toogleisCartOpen}>
      <ShoppingIcon />

      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
