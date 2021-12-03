import React from 'react';
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';

//useing functional component as no need to set state
//destructuring props instead of just declaring props
const MenuItem = ({ title, imageUrl, size, link }) => {
    //using router useNavigate hook for routing
    const navigate = useNavigate();

    //added dynamic size to class name to be able to change size of specific menu-items according to placement
    //using inline style to dynamically set background image of each item. image is is separate div for size hover effect so container maintains size
    return (
        <div className={`${size} menu-item`} onClick={() => {navigate(`${link}`)}}>
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
}


export default MenuItem;