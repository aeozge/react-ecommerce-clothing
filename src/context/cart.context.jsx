import React from "react";
import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified crtItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClean) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClean.id);
};

export const CartContext = createContext({
  clickCart: false,
  setClickCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemToCart: () => {},
  cartItemCount: 0,
  totalCount : 0,
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [clickCart, setClickCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const totalcount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalCount(totalcount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const deleteItemToCart = (productToRemove) =>
    setCartItems(removeCartItem(cartItems, productToRemove));

  const clearItemFromCart = (productToClean) =>
    setCartItems(clearCartItem(cartItems, productToClean));
  const value = {
    clickCart,
    setClickCart,
    addItemToCart,
    cartItems,
    cartItemCount,
    deleteItemToCart,
    clearItemFromCart,
    totalCount
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
