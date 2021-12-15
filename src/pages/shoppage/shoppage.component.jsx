import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Routes, Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

//route is passing in match, use match to display current path as route path
const ShopPage = () => (      
<div className='shop-page'>
    <Routes>
        <Route path={'/'} element={<CollectionsOverview />}/>
        <Route path={'/:categoryId'} element={<CollectionPage />}/>
    </Routes>
</div>
)

export default ShopPage;