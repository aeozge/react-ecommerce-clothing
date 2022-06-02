import React from "react";
import "./checkout.styles.css";
import { useContext } from "react";
import CartContext from "../../context/cart.context";
import CheckOutItem from "../../components/check-out/checkout-item.component";

const CheckOut = () => {
  const { cartItems, totalCount } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalCount}</div>
    </div>
  );
};

export default CheckOut;
