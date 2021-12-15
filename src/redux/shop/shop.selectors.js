import { createSelector } from "reselect";

//maps string value os url param to respective id for dynamic routing
const COLLECTION_ID_MAP = {
    hats: 1,
    shoes: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//finding the collection id matching the url paramenter of collection id map
export const selectCollection = collectionUrlParam => 
    createSelector (
        [selectShopCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )