import React from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.css'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'/>
        <Button>Go to checkout</Button>
      
    </div>
  );
}

export default CartDropdown;
