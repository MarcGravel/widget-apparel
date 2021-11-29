import React from 'react';
import './menu-item.styles.scss'

//useing functional component as no need to set state

//pulling title from props instead of just declaring props
const MenuItem = ({ title, imageUrl, size }) => (
    //added dynamic size to class name to be able to change size of specific menu-items according to placement
    //using inline style to dynamically set background image of each item. image is is separate div for size hover effect so container maintains size
    <div className={`${size} menu-item`}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;