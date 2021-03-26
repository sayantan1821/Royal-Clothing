import React from  'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart.style.scss';

const Cart = () => (
    <div className= 'cart-dropdown'>
        <div className= 'cart-items' />
        <CustomButton>Go To Cart</CustomButton>
    </div>
);

export default Cart;
