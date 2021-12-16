import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem  from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutBtn from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => {
    const preRoundedTax = total * 0.05;
    const tax = Math.round((preRoundedTax + Number.EPSILON) * 100) / 100;
    const finalPrice = total + tax;
    
    return (
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
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className='total'>
                <span className="prices small-price">Subtotal: ${total}</span>
                <span className="prices small-price">Tax: ${tax}</span>
                <span className='prices'>Total: ${finalPrice}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payment*
                <br/>
                CC: 4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
            </div>
            <StripeCheckoutBtn price={finalPrice}/>
        </div>
)}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);