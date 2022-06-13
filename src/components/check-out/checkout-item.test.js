import React from "react";
import CheckOutItem from './checkout-item.component'

const mockProps = {
  cartItem:{
    name: 'women',
    imageUrl: 'www.testImage.com',
    price : 15,
    quantity: 3
  }
}

test('checkout test', () => {
  const wrapper = (<CheckOutItem {...mockProps} />);
  expect(wrapper).toMatchSnapshot()
})
