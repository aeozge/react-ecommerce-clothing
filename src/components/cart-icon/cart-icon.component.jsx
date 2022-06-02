import React from "react";
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import CartContext from "../../context/cart.context";
import "./cart-icon.styles.css";

const CartIcon = () => {
    const { clickCart, setClickCart } = useContext(CartContext);
    const {cartItemCount} = useContext(CartContext);

    const isCartOpen = () => setClickCart(!clickCart);
  
    return (
      <div className='cart-icon-container' onClick={isCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
        {cartItemCount}
          </span>
      </div>
    );
  };
  
  export default CartIcon;
