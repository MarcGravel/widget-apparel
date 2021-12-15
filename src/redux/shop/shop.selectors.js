import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//finding the collection id matching the url paramenter of collection id map
export const selectCollection = collectionUrlParam => 
    createSelector (
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    );