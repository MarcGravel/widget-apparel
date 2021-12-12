import { createSelector } from 'reselect';

//input selector
const selectCart = state => state.cart;

//create selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

//get total count of quantity value in all cart items, use reduce function to add all values
//adding 0 at end of function is the initial accumilator value
//reduce fucntion will accumulate all quantity values in cart-items.quantity
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItems) => 
                accumulatedQuantity + cartItems.quantity, 
                0
        )
);