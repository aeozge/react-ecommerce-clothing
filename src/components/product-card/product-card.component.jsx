import React from "react";
import "./product-card.styles.css";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useContext } from "react";
import CartContext from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart} = useContext(CartContext)

  const addProductToCard = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add to card</Button>
    </div>
  );
};

export default ProductCard;
