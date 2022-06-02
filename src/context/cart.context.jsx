import React from 'react';
import { createContext, useState } from "react";

export const CartContext = createContext({
  clickCart : false,
  setClickCart : () => {},
  });

export const CartProvider = ({children}) => {
    const [clickCart, setClickCart] = useState(false);
    const value = {clickCart, setClickCart};
  return (
    <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>
);
}

export default CartContext;

