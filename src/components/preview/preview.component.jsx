import React from 'react';
import './preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const Preview = ({ title, items }) => (
    <div className='preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='section-preview'>
            {
                //filter item list to only show 4 - array index < 4
                //map items to display filtered array
                items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
            }
        </div>
    </div>
)

export default Preview;
