import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = () => {
    //grab url param and then pass into selector to find() collectionID that matches string value.
    const params = useParams();
    const collection = useSelector(selectCollection(params.categoryId));
    const { title, items } = collection;

    return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    ) 
}

export default CollectionPage;