import React from 'react';
import Preview from '../../components/preview/preview.component';
import { connect } from 'react-redux';
import { selectShopCollections } from  '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (        
<div className='shop-page'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <Preview key={id} {...otherCollectionProps} />
        ))
    }
</div>
)

const mapStateToProps = (state) => ({
    collections: selectShopCollections(state)
})

export default connect(mapStateToProps)(ShopPage);