import React from 'react';
import './collection-item.styles.scss';
import SiteButton from '../site-button/site-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    //destructire properties from item to use in return
    const { name, price, imageUrl } = item;
    
    return(
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            <SiteButton onClick={() => addItem(item)} inverted>Add to Cart</SiteButton>
        </div>
    )
};

//dispatches item clicked to reducer to add item to cart store
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

