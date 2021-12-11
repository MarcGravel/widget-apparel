import React from 'react';
import './site-button.styles.scss';

const SiteButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in': ''} site-button`} {...otherProps}>
        {children}
    </button>
)

export default SiteButton;