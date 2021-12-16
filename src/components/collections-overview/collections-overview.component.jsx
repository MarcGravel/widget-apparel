import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from  '../../redux/shop/shop.selectors';
import Preview from '../preview/preview.component';

const CollectionsOverview = ({ collections }) => {
    return (
    <div className='collections-overview'>
        {    
            collections.map(({id, ...otherCollectionProps}) => (
                <Preview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)}

const mapStateToProps = (state) => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview);