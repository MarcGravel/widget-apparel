import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/gearLogo.png';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/"><img id='header-logo' src={Logo} alt="Logo" /></Link>
        <div className='options-container'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
);

export default Header;