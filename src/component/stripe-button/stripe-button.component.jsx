import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
     const priceForStripe = price * 100;
     const publishableKey = 'pk_test_51Icv3ESDqI0KIcvSZEDILrDfBByDFOFuoJjhlfO6KAyfRLLPpj939D6ysmE3gex5sIyNeJzwTo1pmsekY4ztAR4l006cLNym0O';
     const onToken = token => {
        console.log(token);
        alert('payment Successful');
     }

     return (
         <StripeCheckout
            label= 'pay now'
            name= 'Royal Feather Pvt Ltd.'
            billingAddress
            shippingAddres
            image= ''
            description= {`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
            />
     );
};

export default StripeCheckoutButton;
