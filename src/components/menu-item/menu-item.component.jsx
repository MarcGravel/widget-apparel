import React from 'react';
import './menu-item.styles.scss'

//useing functional component as no need to set state

//pulling title from props instead of just declaring props
const MenuItem = ({ title, imageUrl, size }) => (
    //using inline style to dynamically set background image of each item
    <div 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`${size} menu-item`}>
        <div className='content'>
            <h1 className="title">{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;