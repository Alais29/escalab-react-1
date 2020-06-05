import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GqTrVJvyuz3f1NYlHD3kvagQNX53llWY4lJcu6TYkFQtDUsV6odHB1f7lCHBmvuD44Iy3bXbNfBjGVjnDnKleC300RzdxVAOL';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  }

  return ( 
    <StripeCheckOut 
      label='Pay Now'
      name='La Escala SpA'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
 
export default StripeCheckoutButton;