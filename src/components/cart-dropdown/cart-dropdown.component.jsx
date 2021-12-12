import React from 'react';
import './cart-dropdown.styles.scss';
import SiteButton from '../site-button/site-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, dispatch }) => {

    const navigate = useNavigate();

    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length 
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <h3 className='empty-message'>Your cart is empty</h3>
            }
        </div>
        <SiteButton onClick={() => {
            navigate('/checkout');
            dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
        </SiteButton>
    </div>
    )
}

//using selector so cart dropdown does not rerender on state change that has nothing to do with state inside cart
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);