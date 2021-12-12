import React from 'react';
import './cart-dropdown.styles.scss';
import SiteButton from '../site-button/site-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <SiteButton>GO TO CHECKOUT</SiteButton>
    </div>
)

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems 
});

export default connect(mapStateToProps)(CartDropdown);