import {createSlice} from '@reduxjs/toolkit'

// To persist the cartItems even after a browser refresh, you'll need to implement some form of local storage 
// to store and retrieve the cartItems. Here's how you can do it using Redux Toolkit and the localStorage API:

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalCartItems: 0,
    totalCost: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // Lets first check if the order is being placed from same Restaurant as previous order in cart
            const isSameRestaurant = state.cartItems.findIndex((item)=>{
                return item.restaurantId === action.payload.restaurantId
            })

            if(isSameRestaurant >= 0 || state.cartItems.length == 0) {
                // Lets first check if the item that we want to add is already in our items list
                const itemIndex = state.cartItems.findIndex((item)=>{
                    return item.id === action.payload.id
                })
                if(itemIndex>=0 ) {
                    state.cartItems[itemIndex].cartQuantity += 1;
                } else {
                    // Have a cartQuantity for each UNIQUE product
                    const tempProduct = {...action.payload, cartQuantity:1}
                    state.cartItems.push(tempProduct);                                
                }
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Update local storage
            }
        },
        removeItem: (state, action) => {
            // Lets first check if the item that we want to add is already in our items list
            const itemIndex = state.cartItems.findIndex((item)=>{
                return item.id === action.payload.id
            })
            if(itemIndex>=0) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                if(state.cartItems[itemIndex].cartQuantity == 0){
                    // remove the entry from the list
                    state.cartItems.splice(itemIndex,1);
                }
            } 
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Update local storage
        },
        clearCart: (state, action)=>{
            state.cartItems = [];
            localStorage.removeItem('cartItems'); // Clear from local storage
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

