import CART_ACTION_TYPES from "./cart.types";
import CartReducer from "./cart.reducer";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

test("should return cart initial state", () => {
  expect(CartReducer(undefined, {})).toEqual(initialState);
});

test("should open cart with setIsCartOpen action", () => {
  const cart = CartReducer(
    initialState,
    CART_ACTION_TYPES.SET_IS_CART_OPEN
  ).isCartOpen;
  expect(cart).toEqual(false);
});

