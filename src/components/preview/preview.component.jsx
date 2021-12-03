import React from 'react';
import './preview.styles.scss';

const Preview = ({ title, items }) => (
    <div className='preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='section-preview'>
            {
                items.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default Preview;
