import React from 'react';
import './site-button.styles.scss';

const SiteButton = ({ children, ...otherProps }) => (
    <button className='site-button' {...otherProps}>
        {children}
    </button>
)

export default SiteButton;