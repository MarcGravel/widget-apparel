import React from 'react';
import './cart-dropdown.styles.scss';
import SiteButton from '../site-button/site-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors';

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

//using selector so cart dropdown does not rerender on state change that has nothing to do with state inside cart
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);