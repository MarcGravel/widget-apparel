import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//returns object as array format for collections so collections-overview can map through collections
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    //get all keys, then map over array of keys to get value of collections object at that key
    collections => Object.keys(collections).map(key => collections[key])
)

//finding the collection id matching the url paramenter of collection id map
export const selectCollection = collectionUrlParam => 
    createSelector (
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    );