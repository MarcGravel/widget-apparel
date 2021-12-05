import React from 'react';
import './site-button.styles.scss';

const SiteButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} site-button`} {...otherProps}>
        {children}
    </button>
)

export default SiteButton;