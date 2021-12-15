import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = () => {
    //grab url param and then pass into selector to find() collectionID that matches string value.
    const params = useParams();
    const collection = useSelector(selectCollection(params.categoryId));

    console.log(collection);
    return (
    <div className='collection'>
        <h2>collection Page</h2>
    </div>
    ) 
}

export default CollectionPage;