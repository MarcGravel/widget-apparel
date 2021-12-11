export const addItemToCart = (cartItems, itemToAdd) => {
    //check to see if any existing cart items have matching id to added item 
    const existingCartItem = cartItems.find(cartItem => cartItems.id === itemToAdd.id);

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
    
    return [...cartItems, {...itemToAdd, quantity: 1}];
}