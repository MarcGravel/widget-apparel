import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { selectShopCollections } from  '../../redux/shop/shop.selectors';
import Preview from '../preview/preview.component';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
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

export default connect(mapStateToProps)(CollectionsOverview);