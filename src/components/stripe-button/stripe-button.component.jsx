import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import GearLogo from '../../images/gearLogo.png'

const StripeCheckoutBtn = ({ price }) => {
    //stripe requires price to be sent in cents. Must convert input price from dollars to cents
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51K79peEaGH2HExSmp3Aa37XURVYRTP47GgmmsD3cNgsTHcIqbVHuDanNMAn6WwM7YLrjC9M6FpU5JYEuQTAopS7Z00ztL7IBgX';

    //onSuccess is the method that will fire when StripeCheckout fires. the token property on StripeCheckout is the success callback that triggers when component submits
    //in real-world, instead of logging token, it would be passed to backend which then creates the charge and processes payment.
    const onSuccess = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Widget Apparel'
            bitcoin={true}
            currency='CAD'
            billingAddress
            shippingAddress
            image={GearLogo}
            description={`Your total is $${price}CAD`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onSuccess}
            stripeKey={publishableKey}         
        />
    )
}

export default StripeCheckoutBtn;