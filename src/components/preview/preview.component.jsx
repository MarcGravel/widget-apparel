import React from 'react';
import './preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { useNavigate } from 'react-router-dom';

const Preview = ({ title, items }) => {
    const navigate = useNavigate();

    return (
        <div className='preview'>
            <div className='title-container'>
                <h1 className='title' onClick={() => {navigate(`${title.toLowerCase()}`)}}>{title.toUpperCase()}</h1>
            </div>
            <div className='section-preview'>
                {
                    //filter item list to only show 4 - array index < 4
                    //map items to display filtered array
                    items
                        .filter((item, index) => index < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>
)}

export default Preview;
