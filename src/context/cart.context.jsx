import React from "react";
import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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
  totalCount: 0,
  clearItemFromCart: () => {},
});
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const Initial_State = {
  clickCart: true,
  cartItems: [],
  cartItemCount: 0,
  totalCount: 0,
};

const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        clickCart: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  //const [clickCart, setClickCart] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartItemCount, setCartItemCount] = useState(0);
  // const [totalCount, setTotalCount] = useState(0);

  const [{ clickCart, cartItems, cartItemCount, totalCount }, dispatch] =
    useReducer(CartReducer, Initial_State);

  // useEffect(() => {
  //   const count = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setCartItemCount(count);
  // }, [cartItems]);

  // useEffect(() => {
  //   const totalcount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setTotalCount(totalcount);
  // }, [cartItems]);

  const updateCartItemReducer = (newCartItems) => {
    const count = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const totalcount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    const payload = {
      cartItems: newCartItems,
      cartItemCount: count,
      totalCount: totalcount,
    };
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
    
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };
  const deleteItemToCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };
  const clearItemFromCart = (productToClean) => {
    const newCartItems = clearCartItem(cartItems, productToClean);
    updateCartItemReducer(newCartItems);
  };

  const setClickCart = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));

  };
  const value = {
    clickCart,
    setClickCart,
    addItemToCart,
    cartItems,
    cartItemCount,
    deleteItemToCart,
    clearItemFromCart,
    totalCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
