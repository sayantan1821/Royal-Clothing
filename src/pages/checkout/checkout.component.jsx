import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selector';

import './checkout.style.scss';

const Checkout = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
    <StripeCheckoutButton price= {total} />
    <div className= 'warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242   Exp Date: 01/23   CVV: 123 
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
