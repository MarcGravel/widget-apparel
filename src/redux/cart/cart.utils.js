export const addItemToCart = (cartItems, itemToAdd) => {
    //check to see if any existing cart items have matching id to added item 
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    //if match
    if (existingCartItem) {
        //use map to return new araay of cart items so component re-renders
        //if added item matches mapped item in cart, just update the quantity of that item and not add new item to array
        //else, just return the item
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            )
    }
    //if no match, just add item with quantity of 1
    return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    //if there is only 1 of this type of item in the cart, remove the item completely from cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
    //if there is more than 1 of this item, decrease item quantity count by 1
    else {
        return cartItems.map(cartItem => 
            cartItem.id === itemToRemove.id
                ? {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
            )
    }

}