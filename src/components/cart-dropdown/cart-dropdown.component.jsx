import React from 'react';
import './cart-dropdown.styles.scss';
import SiteButton from '../site-button/site-button.component';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

        </div>
        <SiteButton>GO TO CHECKOUT</SiteButton>
    </div>
)

export default CartDropdown;