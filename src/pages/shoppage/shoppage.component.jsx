import React from 'react';
import SHOP_DATA from './shoppage.data';
import Preview from '../../components/preview/preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        //grabs colelctions from state and sets in constant
        const {collections} = this.state;
        
        return (<div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <Preview key={id} {...otherCollectionProps} />
                ))
            }
            </div>);
    }
}

export default ShopPage;