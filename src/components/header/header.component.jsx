import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/gearLogo.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
);

//connect state/store to header component to grab values. state object here is the root reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

//use connect to connect the state/store to header
export default connect(mapStateToProps)(Header);