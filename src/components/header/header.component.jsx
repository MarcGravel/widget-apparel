import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/gearLogo.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/"><img id='header-logo' src={Logo} alt="Logo" /></Link>
        <div className='options-container'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                //changes button from sign-in to out pending currentUser value
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

//connect state/store to header component to grab values.
const mapStateToProps = ({user: { currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
})

//use connect to connect the state/store to header
export default connect(mapStateToProps)(Header);